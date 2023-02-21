class UserModel {
  constructor() {
    this.users = [];
  }

  async fetchUsers() {
    const response = await fetch('/users');
    const data = await response.json();
    this.users = data;
    return data;
  }

  async createUser(user) {
    const response = await fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    this.users.push(data);
    return data;
  }

  async updateUser(id, user) {
    const response = await fetch(`/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    const index = this.users.findIndex(u => u.id === data.id);
    this.users[index] = data;
    return data;
  }

  async deleteUser(id) {
    await fetch(`/users/${id}`, {
      method: 'DELETE',
    });
    const index = this.users.findIndex(u => u.id === id);
    this.users.splice(index, 1);
    return true;
  }
}
