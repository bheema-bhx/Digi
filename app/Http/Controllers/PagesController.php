<?php namespace App\Http\Controllers;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

class PagesController extends Controller {

	public function welcome()
	{
		return view('pages.welcome');
	}

	public function about()
	{
		$people = ["bheema","shankar","satya","santosh","veeru"];
		return view('pages.about', compact('people'));
	}

	public function contact()
	{
		return view('pages.contact');
	}

	public function jobs()
	{
		return view('pages.jobs');
	}
}
