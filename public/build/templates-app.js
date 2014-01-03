angular.module('templates-app', ['discover/discover.tpl.html', 'quotes/quotes.tpl.html', 'tags/tags.tpl.html']);

angular.module("discover/discover.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("discover/discover.tpl.html",
    "<div id=\"discover-quote\">\n" +
    "	<blockquote>\n" +
    "		<p>\n" +
    "			{{randomQuote.content}}\n" +
    "		</p>\n" +
    "		<small>\n" +
    "			{{randomQuote.author}}\n" +
    "			<span>\n" +
    "				(via <cite><a href=\"http://church.com\" target=\"_blank\">source</a></cite>)\n" +
    "			</span>\n" +
    "		</small>\n" +
    "	</blockquote>\n" +
    "	<div class=\"controls\">\n" +
    "		<button type=\"button\" ng-click=\"newQuote()\" class=\"btn btn-lg btn-naked\" title=\"Roll again\">\n" +
    "			<i class=\"fa fa-random\"></i>\n" +
    "		</button>\n" +
    "		<button type=\"button\" class=\"btn btn-lg btn-naked\" title=\"Save quote\">\n" +
    "			<i class=\"fa fa-download\"></i>\n" +
    "		</button>\n" +
    "	</div>\n" +
    "</div>");
}]);

angular.module("quotes/quotes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("quotes/quotes.tpl.html",
    "<!--<div class=\"public-or-user\">\n" +
    "	<a href=\"#\" title=\"Show yours\">\n" +
    "		<i class=\"fa fa-user\"></i>\n" +
    "	</a>\n" +
    "	<a class=\"active\" href=\"#\" title=\"Show all\">\n" +
    "		<i class=\"fa fa-group\"></i>\n" +
    "	</a>\n" +
    "</div>-->\n" +
    "<div class=\"page-header\">\n" +
    "	<h2>Quotes</h2>\n" +
    "</div>\n" +
    "<div class=\"quotes\">\n" +
    "	<div class=\"page-filter\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-body\">\n" +
    "				<div class=\"input-group\">\n" +
    "					<input type=\"text\" class=\"form-control\" placeholder=\"Filter by keywords\" ng-model=\"quoteFilters\" ng-list='/ /'>\n" +
    "					<span class=\"input-group-btn\">\n" +
    "						<button class=\"btn btn-default\" type=\"button\">\n" +
    "							<i class=\"fa fa-search\"></i>\n" +
    "						</button>\n" +
    "					</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div ng-repeat=\"quote in quotes | greedySearch:quoteFilters\" ng-init=\"quote.isCollapsed = true\">\n" +
    "		<div class=\"quote panel panel-default\">\n" +
    "			<div class=\"panel-body\">\n" +
    "				<div class=\"controls pull-right\">\n" +
    "					<button type=\"button\" class=\"btn btn-xs btn-naked\" title=\"Delete quote\">\n" +
    "						<i class=\"fa fa-trash-o\"></i>\n" +
    "					</button>\n" +
    "					<br>\n" +
    "					<button type=\"button\" class=\"btn btn-xs btn-naked\" title=\"Edit quote\">\n" +
    "						<i class=\"fa fa-pencil\"></i>\n" +
    "					</button>					\n" +
    "				</div>\n" +
    "				<blockquote>\n" +
    "					<p>\n" +
    "						{{quote.content}}\n" +
    "					</p>\n" +
    "					<small>\n" +
    "						{{quote.author}}\n" +
    "						<span ng-if=\"quote.source\">\n" +
    "							(via <cite><a href=\"{{quote.source}}\" target=\"_blank\">source</a></cite>)\n" +
    "						</span>\n" +
    "					</small>\n" +
    "				</blockquote>\n" +
    "			</div>\n" +
    "			<div class=\"panel-footer\">\n" +
    "				<div>\n" +
    "					<div class=\"title clickable\" ng-click=\"quote.isCollapsed = !quote.isCollapsed\">\n" +
    "						<i class=\"fa clickable\" ng-class=\"{ 'fa-caret-down': !quote.isCollapsed, 'fa-caret-right': quote.isCollapsed}\"></i>\n" +
    "						{{quote.tags.length}} tags\n" +
    "					</div>\n" +
    "					<div collapse=\"quote.isCollapsed\">\n" +
    "						<div class=\"tags clearfix\">\n" +
    "							<qt-tag ng-class=\"fa-times\" quote-id=\"{{quote.id}}\" ng-repeat=\"tag in quote.tags\"></qt-dep-tag>\n" +
    "							\n" +
    "							<span class=\"label tag add-new label-default clickable\">\n" +
    "								<span>\n" +
    "									<i class=\"fa fa-plus clickable\"></i>\n" +
    "								</span>\n" +
    "							</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "\n" +
    "		<div class=\"quote edit panel panel-default\">\n" +
    "			<div class=\"panel-body\">\n" +
    "				<form role=\"form\">\n" +
    "					<div class=\"form-group\">\n" +
    "						<label for=\"create-quotation-content\" class=\"control-label\">\n" +
    "							Content\n" +
    "						</label>\n" +
    "						<textarea class=\"form-control\" rows=\"3\" id=\"create-quotation-content\">Success is not final, failure is not fatal. It is the courage to continue that counts.</textarea>\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "						<label for=\"create-author-name\" class=\"control-label\">\n" +
    "							Author\n" +
    "						</label>\n" +
    "						<input type=\"text\" class=\"form-control\" id=\"create-author-name\" value=\"Sir Winston Churchill\">\n" +
    "					</div>\n" +
    "					<div class=\"form-group\">\n" +
    "						<label for=\"create-source-url\" class=\"control-label\">\n" +
    "							Source\n" +
    "						</label>\n" +
    "						<input type=\"text\" class=\"form-control\" id=\"create-source-url\" value=\"http://church.com/\">\n" +
    "					</div>\n" +
    "					<div class=\"controls pull-right\">\n" +
    "						<button type=\"button\" class=\"btn btn-naked\" title=\"Cancel\">\n" +
    "							<i class=\"fa fa-times\"></i>\n" +
    "						</button>\n" +
    "						<button type=\"button\" class=\"btn btn-naked\" title=\"Save\">\n" +
    "							<i class=\"fa fa-check\"></i>\n" +
    "						</button>		\n" +
    "					</div>\n" +
    "				</form>\n" +
    "			</div>\n" +
    "			<div class=\"panel-footer\">\n" +
    "				<div class=\"collapsible\">\n" +
    "					<div class=\"title clickable\" data-toggle=\"collapse\" data-target=\"#quoteX-tags\">\n" +
    "						<!--<i class=\"fa fa-caret-down clickable\"></i>-->\n" +
    "						0 tags\n" +
    "					</div>\n" +
    "					<div class=\"collapse\" id=\"quoteX-tags\">\n" +
    "						<div class=\"tags clearfix\">\n" +
    "							<span class=\"label tag add-new label-default clickable\">\n" +
    "								<span>\n" +
    "									<i class=\"fa fa-plus clickable\"></i>\n" +
    "								</span>\n" +
    "							</span>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "\n" +
    "\n" +
    "</div>");
}]);

angular.module("tags/tags.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("tags/tags.tpl.html",
    "<div class=\"page-header\">\n" +
    "	<h2>Tags</h2>\n" +
    "</div>\n" +
    "<div class=\"tags\">\n" +
    "	<div class=\"page-filter\">\n" +
    "		<div class=\"panel panel-default\">\n" +
    "			<div class=\"panel-body\">\n" +
    "				<div class=\"input-group\">\n" +
    "					<input type=\"text\" class=\"form-control\" placeholder=\"Filter by keywords\" name=\"filter-tags\" ng-model=\"tagFilters\" ng-list='/ /' />\n" +
    "					<span class=\"input-group-btn\">\n" +
    "						<button class=\"btn btn-default\" type=\"button\">\n" +
    "							<i class=\"fa fa-search\"></i>\n" +
    "						</button>\n" +
    "					</span>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"panel panel-default\">\n" +
    "		<div class=\"panel-body\">\n" +
    "\n" +
    "			<div class=\"clearfix\">\n" +
    "				\n" +
    "				<qt-tag ng-repeat=\"tag in tags | greedySearch:tagFilters\"></qt-tag>\n" +
    "\n" +
    "				<!-- edit -->\n" +
    "				<span class=\"label tag editor label-default\">\n" +
    "					<input type=\"text\" value=\"Example editing\">\n" +
    "					<span>\n" +
    "						<i title=\"delete\" class=\"fa fa-times clickable\"></i>\n" +
    "					</span>\n" +
    "				</span>\n" +
    "\n" +
    "				<!-- create (active) -->\n" +
    "				<span class=\"label tag editor label-default\">\n" +
    "					<input type=\"text\" placeholder=\"New tag\">\n" +
    "					<span>\n" +
    "						<i class=\"fa fa-check clickable\"></i>\n" +
    "						<i class=\"fa fa-times clickable\"></i>\n" +
    "					</span>\n" +
    "				</span>\n" +
    "\n" +
    "				<!-- create -->\n" +
    "				<span class=\"label tag add-new label-default clickable\">\n" +
    "					<span>\n" +
    "						<i class=\"fa fa-plus\"></i>\n" +
    "					</span>\n" +
    "				</span>\n" +
    "\n" +
    "			</div>\n" +
    "			<div ng-if=\"confirmDeleteTags\">\n" +
    "				<button class=\"btn btn-warning\" ng-click=\"deleteTags()\">Confirm Delete</button>\n" +
    "				<button class=\"btn btn-default\" ng-click=\"cancelDeleteTags()\">Cancel</button>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	<div>\n" +
    "</div>");
}]);
