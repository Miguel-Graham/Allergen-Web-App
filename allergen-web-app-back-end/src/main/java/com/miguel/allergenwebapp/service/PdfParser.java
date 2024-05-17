package com.miguel.allergenwebapp.service;

import com.miguel.allergenwebapp.model.Dish;
import com.miguel.allergenwebapp.repository.DishRepository;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.io.IOUtils;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class PdfParser {
    @Autowired
    private DishRepository dishRepository;

    public static void main(String[] args) {
        try {
            ClassPathResource pdfResource = new ClassPathResource("pdf/TDS.pdf");
            try (InputStream inputStream = pdfResource.getInputStream()) {
                String ingredients = extractIngredientsFromPage(inputStream, 35); // Specify the page number here
                System.out.println("Ingredients:");
                System.out.println(ingredients);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public String getIngredients(String dishName) {
        String ingredients = "";
        Dish dish = dishRepository.findByName(dishName.toUpperCase());
if (dish != null) {
    try {
        ClassPathResource pdfResource = new ClassPathResource("pdf/TDS.pdf");
        try (InputStream inputStream = pdfResource.getInputStream()) {
            if (dish.getTdsNum() > 0) { // Check if the TDS number is 0
                ingredients = extractIngredientsFromPage(inputStream, dish.getTdsNum());
            }
            else {
                ingredients = "Ingredients unavailable";
            }
        }
    } catch (IOException e) {
        e.printStackTrace();
    }
}

       return ingredients;
        }

    private static String extractIngredientsFromPage(InputStream inputStream, int pageNumber) throws IOException {
        byte[] bytes = IOUtils.toByteArray(inputStream);
        try (PDDocument document = Loader.loadPDF(bytes)) {
            PDFTextStripper stripper = new PDFTextStripper();
            stripper.setStartPage(pageNumber);
            stripper.setEndPage(pageNumber);
            String text = stripper.getText(document);

            // Define a regular expression pattern to match the "Ingredients" section
            Pattern pattern = Pattern.compile("Ingredients:(.*?)Contains:.*", Pattern.DOTALL);
            Matcher matcher = pattern.matcher(text);

            // Extract the "Ingredients" section
            String ingredients = "";
            if (matcher.find()) {
                ingredients = matcher.group(1).trim();
            }
            return ingredients;
        }
    }
}