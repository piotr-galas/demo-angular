<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DemoController extends Controller
{
	public function indexAction()
	{
		return $this->render('AppBundle:Demo:index.html.twig');
	}

	public function firstAction()
	{
		return $this->render('AppBundle:Demo:first.html.twig');
	}

	public function secondAction()
	{
		return $this->render('AppBundle:Demo:second.html.twig');
	}

	public function thirdAction()
	{
		return $this->render('AppBundle:Demo:third.html.twig');
	}

	public function fourthAction()
	{
		return $this->render('AppBundle:Demo:fourth.html.twig');
	}

	public function fifthAction()
	{
		return $this->render('AppBundle:Demo:fifth.html.twig');
	}

}