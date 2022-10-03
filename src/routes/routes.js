import { createBrowserRouter } from "react-router-dom";
import Countries from "../components/Countries";
import Country from "../components/Country";

export const router = createBrowserRouter([
    {
        path:'/', 
        loader: async()=>{
            return fetch('https://restcountries.com/v2/all')
        },
        element: <Countries></Countries>
    },
    {
        path: '/country/:name',
        loader: async({params})=>{
            return fetch(`https://restcountries.com/v2/name/${params.name}`)
        },
        element: <Country></Country>
    }
]);