class UserView {
  constructor(controller, userModel) {
    this.controller = controller;
    this.userModel = userModel;
    this.form = document.getElementById('user-form');
    this.table = document.getElementById('user-table');
    this.nameInput = document.getElementById('name');
    this.emailInput = document.getElementById('email');
    this.submitButton = document.getElementById('submit-btn');
    this.users = [];
  }

  async init() {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const user = {
        name: this.nameInput.value,
        email: this.emailInput.value,
      };
      this.controller.createUser(user);
    });

    this.submitButton.addEventListener('click', event => {
      event.preventDefault();
      const user = {
        name: this.nameInput.value,
        email: this.emailInput.value,
      };
      this.controller.createUser(user);
    });

    await this.fetchUsers();
    this.renderUsers();
  }

  async fetchUsers() {
    const data = await this.userModel.fetchUsers();
    this.users = data;
  }

  renderUsers() {
    this.table.innerHTML = '';
    console.log(this.users);
    this.users.forEach(user => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>
          <button data-id="${user.id}" class="edit-btn">Edit</button>
          <button data-id="${user.id}" class="delete-btn">Delete</button>
        </td>
      `;
      this.table.appendChild(row);

      const editButton = row.querySelector('.edit-btn');
      editButton.addEventListener('click', event => {
        const id = event.target.getAttribute('data-id');
        const user = this.users.find(u => u.id === id);
        this.nameInput.value = user.name;
        this.emailInput.value = user.email;
        this.submitButton.innerText = 'Update';
        this.submitButton.setAttribute('data-id', id);
      });

      const deleteButton = row.querySelector('.delete-btn');
      deleteButton.addEventListener('click', event => {
        const id = event.target.getAttribute('data-id');
        this.controller.deleteUser(id);
      });
    });
  }

  clearForm() {
    this.nameInput.value = '';
    this.emailInput.value = '';
    this.submitButton.innerText = 'Create';
    this.submitButton.removeAttribute('data-id');
  }
}
