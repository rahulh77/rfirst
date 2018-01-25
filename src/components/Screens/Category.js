import React, { Component } from "react";

class Category extends Component {
  state = {
    allChecked: false,
    checkedCategories: {},
    categories: [
      { id: 1, categoryname: "Phones", isChecked: false },
      { id: 2, categoryname: "Laptops", isChecked: true },
      { id: 3, categoryname: "Watches", isChecked: true },
      { id: 4, categoryname: "Storage", isChecked: false }
    ]
  };

  clickHandlerWithParameter = myinput => {
    console.log(myinput);
  };

  toggleCheckbox(index) {
    console.log(index);
    const categoryArray = [...this.state.categories];
    categoryArray[index].isChecked = !categoryArray[index].isChecked;
    this.setState({ categories: categoryArray });
  }

  openSecondScreen() {
    const categoriesArray = [...this.state.categories];
    let filteredresult = categoriesArray.filter(
      item => item.isChecked === true
    );
    this.setState({ checkedCategories: filteredresult });
  }

  render() {
    let listItems = this.state.categories.map((x, index) => (
      <div key={x.id}>
        <input
          type="checkbox"
          checked={x.isChecked}
          onChange={() => this.toggleCheckbox(index)}
        />
        {x.categoryname}
      </div>
    ));

    let checkedCategoriesList =
      this.state.checkedCategories.length > 0 &&
      this.state.checkedCategories.map((x, index) => (
        <div key={x.id}>{x.categoryname}</div>
      ));

    return (
      <div>
        <h1>Category Component</h1>
        {/* // for of */}
        for (let category of this.state.categories){" "}
        {<h4>category.categoryname</h4>}
        {/* // map */}
        {listItems}
        <button onClick={() => this.openSecondScreen()}>Get Brands</button>
        {checkedCategoriesList}
      </div>
    );
  }
}

export default Category;
