import React from 'react'
import { Link } from "react-router-dom";
import fire from "./config/fire"


class CategoryPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categories: []
        };
    }

    renderCategoryListings = () => {
        


    }


    componentDidMount = () => {
        this.db = fire.firestore();
        this.unsubscribe = this.db.collection("Categories").onSnapshot((collection) => {
          let newCategoryList = [];
          collection.forEach(function(doc){
            let category = doc.data();
            let newCategory = {
              id: category.id,
              name: category.name,
              options: category.options
            };
            newCategoryList.push(newCategory);
          });
          this.setState({
            categories: newCategoryList
          });
        });
      }
    
    componentWillUnmount = () => {
        this.unsubscribe()
    }

    render = () => {
        return(
            <div>
 
            </div>
        )
    }
}

export default CategoryPage;