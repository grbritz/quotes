<!DOCTYPE html>
<html lang="en" ng-app="quoteApp">
<head>
	<meta charset="utf-8">
	<title>quotes - Scaffold Test</title>
	<link rel="stylesheet" type="text/css" href="{= asset('include/css/bootstrap.min.css') =} ">
	<link rel="stylesheet" type="text/css" href="{= asset('include/css/font-awesome.min.css') =}">
	<link rel="stylesheet" type="text/css" href="{= asset('include/css/style.css') =}">

	<script type="text/javascript" src="{= asset('include/js/jquery-2.0.3.min.js') =} "></script>

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
	<div id="navbar" ng-controller="NavCtrl">
		<div class="inner">
			<a href="" title="Create a quote" data-toggle="modal" data-target="#newQuoteModal">
				<i class="fa fa-plus"></i>
			</a>
			<a ng-class="{active: isActive('/quotes/list')}" href="#quotes/list" title="Your quotes">
				<i class="fa fa-quote-left"></i>
			</a>
			<a ng-class="{active: isActive('/tags/list')}" href="#tags/list" title="Your tags">
				<i class="fa fa-tags"></i>
			</a>
			<a ng-class="{active: isActive('/discover')}" href="#discover" title="Discover quotes">
				<i class="fa fa-random"></i>
			</a>
		</div>
	</div>
	<div id="page">
		<div class="container-fluid">
			<div ng-view class="page-frame"></div>
		</div>
	</div>
	<!-- New quote modal -->
	<div class="modal fade" id="newQuoteModal" tabindex="-1" role="dialog" aria-labelledby="newQuoteModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h2 class="modal-title" id="newQuoteModalLabel">New quote</h2>
				</div>
				<div class="modal-body">
					<form role="form">
						<div class="form-group">
							<label for="create-quotation-content" class="control-label">
								Content
							</label>
							<textarea class="form-control" rows="4" id="create-quotation-content" placeholder="Text"></textarea>
						</div>
						<div class="form-group">
							<label for="create-author-name" class="control-label">
								Author
							</label>
							<input type="text" class="form-control" id="create-author-name" placeholder="Name">
						</div>
						<div class="form-group">
							<label for="create-source-url" class="control-label">
								Source
							</label>
							<input type="text" class="form-control" id="create-source-url" placeholder="URL">
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-lg btn-naked" data-dismiss="modal">
						<i class="fa fa-times"></i>
					</button>
					<button type="button" class="btn btn-lg btn-naked">
						<i class="fa fa-check"></i>
					</button>
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
	<script type="text/javascript" src="{= asset('include/js/bootstrap.min.js') =} "></script>
	<script type="text/javascript" src="{= asset('include/js/scripts.js') =} "></script>
</body>
</html>