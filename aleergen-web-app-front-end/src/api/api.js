import axios from "axios";

export const fetchMenuItems  = async (keyword) => {
    try {
        const response = await axios.get("/allergy/getMenuList", {
            params: {
                keyword: keyword
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
export const fetchAllergies = async () => {
    try {
        const response = await axios.get("/allergy/getAllergyList");
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const fetchResultList = async (dishName) => {
    try {
        const response = await axios.get("/allergy/resultList", {
            params: {
                dishName: dishName
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
export const fetchIngredients = async (dishName) => {
    try {
        const response = await axios.get("/allergy/getIngredients", {
            params: {
                dishName: dishName
            },
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
