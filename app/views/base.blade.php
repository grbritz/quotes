<!DOCTYPE html>
<html lang="en" ng-app="quoteApp">
<head>
	<meta charset="utf-8">
	<title>quotes - Scaffold Test</title>
	<link rel="stylesheet" type="text/css" href="{= asset('include/css/bootstrap.min.css') =} ">
	<link rel="stylesheet" type="text/css" href="{= asset('include/css/font-awesome.min.css') =}">
	<link rel="stylesheet" type="text/css" href="{= asset('include/css/style.css') =}">


	<script type="text/javascript" src="{= asset('include/ng/lib/angular.min.js') =}"></script>
	<script type="text/javascript" src="{= asset('include/ng/lib/angular-resource.min.js') =}"></script>
	<script type="text/javascript" src="{= asset('include/ng/lib/angular-route.min.js') =}"></script>

	<script type="text/javascript" src="{= asset('include/ng/app/app.js') =}"></script>
	<script type="text/javascript" src="{= asset('include/ng/app/controller.js') =}"></script>
	<script type="text/javascript" src="{= asset('include/ng/app/directives.js') =}"></script>
	<script type="text/javascript" src="{= asset('include/ng/app/filters.js') =}"></script>
	<script type="text/javascript" src="{= asset('include/ng/app/services.js') =}"></script>
</head>
<body>
	<div id="navbar">
		<a href="#create">
			<i class="fa fa-plus"></i>
		</a>
		<a href="#discover">
			<i class="fa fa-asterisk"></i>
		</a>
		<a href="#quotes">
			<i class="fa fa-quote-left"></i>
		</a>
		<a href="#tags">
			<i class="fa fa-tag"></i>
		</a>
	</div>
	<div id="page">
		<div ng-view class="page-frame"></div>
	</div>
	<script type="text/javascript" src="{= asset('include/js/jquery-2.0.3.min.js') =} "></script>
	<script type="text/javascript" src="{= asset('include/js/boostrap.min.js') =} "></script>
	<script type="text/javascript" src="{= asset('include/js/scripts.js') =} "></script>
</body>
</html>