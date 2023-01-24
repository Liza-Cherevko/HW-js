import { useEffect,useState } from "react";
import { api } from "../../../../api";

 export default function useCategories() { 
    const [list, setList] = useState([]);

    function fetchCategories() {
        api.get('categories').then(({data})=>setList(data))
    }

     function removeCategory(id) { 
         api.delete('categories/'+id).then(fetchCategories)
     }
     function createCategory(newCategory) { 
        api.post('categories',newCategory ).then(fetchCategories)
     }
     function updateCategory(updateCategory) { 
        api.delete('categories/',updateCategory.id,updateCategory ).then(fetchCategories)
    }
    useEffect(() => { 
        fetchCategories()
    }, [])
    
     return {
         list,
         removeCategory,
         createCategory,
         updateCategory
     }
}