<?php

/**
 * Zt Shortcodes
 * A powerful Joomla plugin to help effortlessly customize your own content and style without HTML code knowledge
 * 
 * @name        Zt Shortcodes
 * @version     2.0.0
 * @package     Plugin
 * @subpackage  System
 * @author      ZooTemplate 
 * @email       support@zootemplate.com 
 * @link        http://www.zootemplate.com 
 * @copyright   Copyright (c) 2015 ZooTemplate
 * @license     GPL v2 
 */
defined('_JEXEC') or die('Restricted access');

jimport('joomla.filesystem.file');
jimport('joomla.filesystem.folder');
/*
 * import jquery if need
 */

// Global defines
require_once __DIR__ . '/defines.php';
// Core libraries
require_once __DIR__ . '/path.php';
require_once __DIR__ . '/loader.php';

ZtShortcodesPath::getInstance()->registerNamespace('Shortcodes', ZTSHORTCODES_CORE);
ZtShortcodesPath::getInstance()->registerNamespace('Shortcodes', ZTSHORTCODES_LOCAL);

/* Register Zo2 autoloading by Psr2 */
spl_autoload_register(array('ZtShortcodesLoader', 'autoloadZo2Psr2'));
