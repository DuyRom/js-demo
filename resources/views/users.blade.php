<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Basic Table</h2>
  <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>            
   <h1>Users</h1>
    <div id="user-table-container">
      <table class="table" id="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
    <div id="user-form-container">
      <h2>Create User</h2>
      <form id="user-form">
        @csrf
        <input type="text" id="name" placeholder="Name" required>
        <input type="email" id="email" placeholder="Email" required>
        <button id="submit-btn">Create</button>
      </form>
    </div>
</div>
<script src="{{ asset('js/models/UserModel.js') }}"></script>
<script src="{{ asset('js/views/UserView.js') }}"></script>
<script src="{{ asset('js/controllers/UserController.js') }}"></script>
<script>
  const controller = new UserController();
  controller.init();
</script>
</body>
</html>
