<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>INICIO</title>

    <!-- Bootstrap core CSS -->
    <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="assets/css/signin.css" rel="stylesheet">

</head>
<body>

    <div class="container">

      <form class="form-signin" action="sistema/index.php" method="post">
        <h2 class="form-signin-heading">Introduce tus datos</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="text" id="usuario" name="usuario" class="form-control" placeholder="Usuario" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="clave" name="clave" class="form-control" placeholder="Password" required>
        <div class="checkbox">
         <!--
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
-->
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      </form>

    </div> <!-- /container -->
  </body>
</html>