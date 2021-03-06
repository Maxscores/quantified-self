class Food {
  constructor(id, name, calories) {
    this.id = +id
    this.name = name
    this.calories = +calories
  }
  appendFood(table, type) {
    if (type === 'delete') {
      table.append(this.foodRowDeletable())
    } else if (type === 'checkbox') {
      table.append(this.foodRowCheckable())
    } else if (type === "edit") {
      table.append(this.foodRowEditable())
    }
  }
  prependFood(table, type) {
    if (type === 'delete') {
      table.find('tr:first').before(this.foodRowDeletable())
    } else if (type === 'checkbox') {
      table.find('tr:first').before(this.foodRowCheckable())
    } else if (type === "edit") {
      table.find('tr:first').before(this.foodRowEditable())
    }
  }
  foodRowEditable() {
    let paramName = this.name.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')
    return `<tr class='food' data-id=${this.id} data-name=${paramName} data-calories=${this.calories}>
              <td data-id="name" contentEditable>${this.name}</td>
              <td data-id="calories" contentEditable>${this.calories}</td>
              <td>
                <img class="delete" data-id="delete" tabindex="0" src="./delete.png" alt="delete">
              </td>
            </tr>`
  }
  foodRowDeletable() {
    return `<tr class='food' data-id=${this.id}>
              <td data-id="name">${this.name}</td>
              <td data-id="calories">${this.calories}</td>
              <td>
                <img class="delete" data-id="delete" tabindex="0" src="./delete.png" alt="delete">
              </td>
            </tr>`
  }
  foodRowCheckable() {
    return `<tr class='food' data-id='${this.id}'>
              <td><input title="${this.name}" label="${this.name}" type="checkbox" data-id="${this.id}"> </td>
              <td data-id="name">${this.name}</td>
              <td data-id="calories">${this.calories}</td>
            </tr>`
  }
}

module.exports = Food
