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
                <ul>
                    <li>
                        <Link to="/categories/music">music</Link>
                    </li>
                    <li>
                        <Link to="/categories/games">games</Link>
                    </li>
                    <li>
                        <Link to="/categories/movies">movies</Link>
                    </li>
                    <li>
                        <Link to="/categories/sports">sports</Link>
                    </li>
                    <li>
                        <Link to="/categories/tv">tv</Link>
                    </li>
                    <li>
                        <Link to="/categories/animals">animals</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default CategoryPage;