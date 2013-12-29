<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', function()
{
	return View::make('base');
});

Route::group(array('prefix' => 'quotes'), function(){

	Route::get('/', function(){
		return Redirect::to('/quotes/public');
	});

	Route::group(array('prefix' => 'public'), function(){
		Route::get('/', function() {
			return Response::make(array(
				array(
					'author'	=> 'Theodore Roosevelt',
					'source'	=> 'http://wikipedia.org',
					'content'	=> 'Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.'
					),
				array(
					'author'	=> 'Albert Einstein', 
					'source'	=> 'http://google.com',
					'content'	=> 'I have found no better expression than 
					"religious" for confidence in the rational nature of reality, 
					insofar as it is accessible to human reason.'
				 ),
				array(
					'author'	=> 'Albert Einstein',
					'source'	=> 'http://originalburn.com/quotes/all',
					'content'	=> 'Physical concepts are free creations of the human mind, and are not, however it may seem,
					uniquely determined by the external world.'
					),
				array(
					'author'	=> 'Eric Hoffer',
					'source'	=> 'http://facebook.com',
					'content'	=> 'In times of change, Learners inherit the Earth, while the Learned find themselves beautifully equipped to deal with a world that no longer exists.'
					),
				array(
					'author'	=> 'Albert Einstein',
					'source'	=> 'http://quotes.com',
					'content'	=> 'I have no special talents. I am only passionately curious.'
					),
				array(
					'author'	=> 'Socrates',
					'source'	=> 'http://greeks.com',
					'content'	=> 'Beware the barrenness of a busy life.'
					),
				array(
					'author'	=> 'Socrates',
					'source'	=> 'http://ancientgreeks.com',
					'content'	=> 'Be slow to fall into friendship; but when thou art in, continue firm and constant.'
					),
				array(
					'author'	=> 'Kurt Vonnegut',
					'source'	=> 'http://quotes.com',
					'content'	=> 'Be careful what you pretend to be because you are what you pretend to be.'
					),
				array(
					'author'	=> 'Buckminster Fuller',
					'source'	=> 'http://wikipedia.com',
					'content'	=> 'Nature is trying very hard to make us succeed, but nature does not depend on us. We are not the only experiment.'
					),
				array(
					'author'	=> 'Isaac Newton',
					'source'	=> 'http://newtonsmind.com',
					'content'	=> 'If I have seen further, it is by standing on the shoulders of giants.'
					),
				), 200);
		});

		Route::get('/random', function() {
			$arr = array(
				array(
					'author'	=> 'Theodore Roosevelt',
					'source'	=> 'http://wikipedia.org',
					'content'	=> 'Far better is it to dare mighty things, to win glorious triumphs, even though checkered by failure... than to rank with those poor spirits who neither enjoy nor suffer much, because they live in a gray twilight that knows not victory nor defeat.'
					),
				array(
					'author'	=> 'Albert Einstein', 
					'source'	=> 'http://google.com',
					'content'	=> 'I have found no better expression than 
					"religious" for confidence in the rational nature of reality, 
					insofar as it is accessible to human reason.'
				 ),
				array(
					'author'	=> 'Albert Einstein',
					'source'	=> 'http://originalburn.com/quotes/all',
					'content'	=> 'Physical concepts are free creations of the human mind, and are not, however it may seem,
					uniquely determined by the external world.'
					),
				array(
					'author'	=> 'Eric Hoffer',
					'source'	=> 'http://facebook.com',
					'content'	=> 'In times of change, Learners inherit the Earth, while the Learned find themselves beautifully equipped to deal with a world that no longer exists.'
					),
				array(
					'author'	=> 'Albert Einstein',
					'source'	=> 'http://quotes.com',
					'content'	=> 'I have no special talents. I am only passionately curious.'
					),
				array(
					'author'	=> 'Socrates',
					'source'	=> 'http://greeks.com',
					'content'	=> 'Beware the barrenness of a busy life.'
					),
				array(
					'author'	=> 'Socrates',
					'source'	=> 'http://ancientgreeks.com',
					'content'	=> 'Be slow to fall into friendship; but when thou art in, continue firm and constant.'
					),
				array(
					'author'	=> 'Kurt Vonnegut',
					'source'	=> 'http://quotes.com',
					'content'	=> 'Be careful what you pretend to be because you are what you pretend to be.'
					),
				array(
					'author'	=> 'Buckminster Fuller',
					'source'	=> 'http://wikipedia.com',
					'content'	=> 'Nature is trying very hard to make us succeed, but nature does not depend on us. We are not the only experiment.'
					),
				array(
					'author'	=> 'Isaac Newton',
					'source'	=> 'http://newtonsmind.com',
					'content'	=> 'If I have seen further, it is by standing on the shoulders of giants.'
					),
				);
			$result = $arr[rand(0, count($arr) - 1)];
			return Response::make($result);
		});
	});
	
	Route::group(array('prefix' => 'user'), function() {
		Route::get('/', function() {
			return Response::make(array(
				array(
				'id'		=> 0,
				'author'	=> 'Albert Einstein',
				'source'	=> 'http://quotes.com',
				'content'	=> 'I have no special talents. I am only passionately curious.',
				'tags'		=> array(
									array(
										'id'	=> 5,
										'name'	=> 'inspiration'
									),
									array(
										'id'	=> 1,
										'name'	=> 'curiosity'
										),
									array(
										'id'	=> 6,
										'name'	=> 'Lucid'
										),
									array(
										'id'	=> 7,
										'name'	=> 'Geometry'
										),
									array(
										'id'	=> 8,
										'name'	=> 'Philosophy'
										),
									array(
										'id'	=> 9,
										'name'	=> 'Physics'
										),
								)
				),
				array(
				'id'		=> 1,
				'author'	=> 'Isaac Newton',
				'source'	=> 'http://newtonsmind.com',
				'content'	=> 'If I have seen further, it is by standing on the shoulders of giants.',
				'tags'		=> array(
									array(
										'id'	=> 5,
										'name'	=> 'inspiration'
									),
									array(
										'id'	=> 6,
										'name'	=> 'Lucid'
									),
									array(
										'id'	=> 7,
										'name'	=> 'Geometry'
										),
									array(
										'id'	=> 8,
										'name'	=> 'Philosophy'
										),
									array(
										'id'	=> 9,
										'name'	=> 'Physics'
										),
								)
				),
				array(
				'id'		=> 2,
				'author'	=> 'Socrates',
				'source'	=> '',
				'content'	=> 'Beware the barrenness of a busy life.',
				'tags'		=> array(
									array(
										'id'	=> 2,
										'name'	=> 'balance'
									),
									array(
										'id'	=> 3,
										'name'	=> 'lifestyle'
									),
									array(
										'id'	=> 6,
										'name'	=> 'Lucid'
									),
									array(
										'id'	=> 7,
										'name'	=> 'Geometry'
										),
									array(
										'id'	=> 8,
										'name'	=> 'Philosophy'
										),
									array(
										'id'	=> 9,
										'name'	=> 'Physics'
										),
								)
				),
			),
		200);
		});

		Route::get('/random/', function(){
			$arr = array(
				array(
					'author'	=> 'Albert Einstein',
					'source'	=> 'http://quotes.com',
					'content'	=> 'I have no special talents. I am only passionately curious.'
					),
				array(
					'author'	=> 'Socrates',
					'source'	=> 'http://greeks.com',
					'content'	=> 'Beware the barrenness of a busy life.'
					),
				array(
					'author'	=> 'Isaac Newton',
					'source'	=> 'http://newtonsmind.com',
					'content'	=> 'If I have seen further, it is by standing on the shoulders of giants.'
					),
				);
			$result = $arr[rand(0, count($arr) - 1)];
			return Response::make($result);
		});
	});
	

	
});


Route::group(array('prefix' => 'tags'), function(){

	Route::get('/', function(){
		return Redirect::to('/tags/public/');
	});

	Route::get('/public', function(){
		return Response::make(array(
			array(
				'id'	=> 1,
				'name'	=> 'Curiosity'
				),
			array(
				'id'	=> 2,
				'name'	=> 'Balance'
				),
			array(
				'id'	=> 3,
				'name'	=> 'Lifestyle'
				),
			array(
				'id'	=> 4,
				'name'	=> 'Learning',
				),
			array(
				'id'	=> 5,
				'name'	=> 'Inspiration'
				),
			array(
				'id'	=> 6,
				'name'	=> 'Lucid'
				),
			array(
				'id'	=> 7,
				'name'	=> 'Geometry'
				),
			array(
				'id'	=> 8,
				'name'	=> 'Philosophy'
				),
			array(
				'id'	=> 9,
				'name'	=> 'Physics'
				),
			array(
				'id'	=> 10,
				'name'	=> 'Nature'
				),
			array(
				'id'	=> 11,
				'name'	=> 'Awe'
				),
			array(
				'id'	=> 12,
				'name'	=> 'Dreams'
				),
			array(
				'id'	=> 13,
				'name'	=> 'Motivational'
				),
			array(
				'id'	=> 14,
				'name'	=> 'Happiness'
				),
			array(
				'id'	=> 15,
				'name'	=> 'Classic'
				),
			array(
				'id'	=> 16,
				'name'	=> 'Great men'
				),
			array(
				'id'	=> 17,
				'name'	=> 'Renaissance'
				),
			array(
				'id'	=> 18,
				'name'	=> 'The Enlightenment'
				),
			array(
				'id'	=> 19,
				'name'	=> 'European thinkers'
				),
			array(
				'id'	=> 20,
				'name'	=> 'Eastern philosophy'
				),
			array(
				'id'	=> 21,
				'name'	=> 'New Age'
				),
			array(
				'id'	=> 22,
				'name'	=> 'Conspiracy'
				),
			array(
				'id'	=> 23,
				'name'	=> 'UFO'
				),
			array(
				'id'	=> 24,
				'name'	=> 'George Costanza'
				),
			array(
				'id'	=> 25,
				'name'	=> 'Roger Moore'
				),
			array(
				'id'	=> 26,
				'name'	=> 'Mountains'
				),
			array(
				'id'	=> 27,
				'name'	=> 'Trees'
				),
			array(
				'id'	=> 28,
				'name'	=> 'Sun'
				),
			array(
				'id'	=> 29,
				'name'	=> 'Earth'
				),
			array(
				'id'	=> 30,
				'name'	=> 'Gaia'
				),
			array(
				'id'	=> 31,
				'name'	=> 'Celestial'
				),
			array(
				'id'	=> 32,
				'name'	=> 'Cosmic'
				),
			array(
				'id'	=> 33,
				'name'	=> 'Universal'
				),
			array(
				'id'	=> 34,
				'name'	=> 'Patterns'
				),
			array(
				'id'	=> 35,
				'name'	=> 'Flocking behavior'
				),
			array(
				'id'	=> 36,
				'name'	=> 'Psychology'
				),
			array(
				'id'	=> 37,
				'name'	=> 'Sociology'
				),
			array(
				'id'	=> 38,
				'name'	=> 'Numerology'
				),
			array(
				'id'	=> 39,
				'name'	=> 'Cheese'
				)
			), 200);
	});

	Route::get('/user/{id?}', function($id = 1){
		return Response::make(array(
			array(
				'id'	=> 1,
				'name'	=> 'Curiosity'
				),
			array(
				'id'	=> 2,
				'name'	=> 'Balance'
				),
			array(
				'id'	=> 3,
				'name'	=> 'Lifestyle'
				),
			array(
				'id'	=> 4,
				'name'	=> 'Learning',
				),
			array(
				'id'	=> 5,
				'name'	=> 'Inspiration'
				),
			array(
				'id'	=> 6,
				'name'	=> 'Lucid'
				),
			array(
				'id'	=> 7,
				'name'	=> 'Geometry'
				),
			array(
				'id'	=> 8,
				'name'	=> 'Philosophy'
				),
			array(
				'id'	=> 9,
				'name'	=> 'Physics'
				),
			array(
				'id'	=> 10,
				'name'	=> 'Nature'
				),
			array(
				'id'	=> 11,
				'name'	=> 'Awe'
				),
			array(
				'id'	=> 12,
				'name'	=> 'Dreams'
				),
			array(
				'id'	=> 13,
				'name'	=> 'Motivational'
				),
			array(
				'id'	=> 14,
				'name'	=> 'Happiness'
				),
			array(
				'id'	=> 15,
				'name'	=> 'Classic'
				),
			array(
				'id'	=> 16,
				'name'	=> 'Great men'
				),
			array(
				'id'	=> 17,
				'name'	=> 'Renaissance'
				),
			array(
				'id'	=> 18,
				'name'	=> 'The Enlightenment'
				),
			array(
				'id'	=> 19,
				'name'	=> 'European thinkers'
				),
			array(
				'id'	=> 20,
				'name'	=> 'Eastern philosophy'
				),
			array(
				'id'	=> 21,
				'name'	=> 'New Age'
				),
			array(
				'id'	=> 22,
				'name'	=> 'Conspiracy'
				),
			array(
				'id'	=> 23,
				'name'	=> 'UFO'
				),
			array(
				'id'	=> 24,
				'name'	=> 'George Costanza'
				),
			array(
				'id'	=> 25,
				'name'	=> 'Roger Moore'
				),
			array(
				'id'	=> 26,
				'name'	=> 'Mountains'
				),
			array(
				'id'	=> 27,
				'name'	=> 'Trees'
				),
			array(
				'id'	=> 28,
				'name'	=> 'Sun'
				),
			array(
				'id'	=> 29,
				'name'	=> 'Earth'
				),
			array(
				'id'	=> 30,
				'name'	=> 'Gaia'
				),
			array(
				'id'	=> 31,
				'name'	=> 'Celestial'
				),
			array(
				'id'	=> 32,
				'name'	=> 'Cosmic'
				),
			array(
				'id'	=> 33,
				'name'	=> 'Universal'
				),
			array(
				'id'	=> 34,
				'name'	=> 'Patterns'
				),
			array(
				'id'	=> 35,
				'name'	=> 'Flocking behavior'
				),
			array(
				'id'	=> 36,
				'name'	=> 'Psychology'
				),
			array(
				'id'	=> 37,
				'name'	=> 'Sociology'
				),
			array(
				'id'	=> 38,
				'name'	=> 'Numerology'
				),
			array(
				'id'	=> 39,
				'name'	=> 'Cheese'
				)
			));
	});

});