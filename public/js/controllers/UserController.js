class UserController {
  constructor() {
    this.userModel = new UserModel();
    this.userView = new UserView(this, this.userModel);
  }

  async init() {
    await this.userView.init();
  }

  async createUser(user) {
    if (this.userView.submitButton.getAttribute('data-id')) {
      const id = this.userView.submitButton.getAttribute('data-id');
      await this.userModel.updateUser(id, user);
    } else {
      await this.userModel.createUser(user);
    }
    await this.userView.fetchUsers();
    this.userView.renderUsers();
    this.userView.clearForm();
  }

  async deleteUser(id) {
    await this.userModel.deleteUser(id);
    await this.userView.fetchUsers();
    this.userView.renderUsers();
  }
}
