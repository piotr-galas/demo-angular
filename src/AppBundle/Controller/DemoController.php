<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DemoController extends Controller
{
//	public function indexAction()
//	{
//
//	}

	public function firstAction()
	{
		return $this->render('AppBundle:Demo:first.html.twig');
	}

//	public function secondAction()
//	{
//		return $this->render('default/index.html.twig');
//	}
//
//	public function thirdAction()
//	{
//		return $this->render('default/index.html.twig');
//	}
//
//	public function fourthAction()
//	{
//		return $this->render('default/index.html.twig');
//	}
//
//	public function fifthAction()
//	{
//		return $this->render('default/index.html.twig');
//	}

}