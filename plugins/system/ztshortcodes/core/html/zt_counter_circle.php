<?php

/**
 * ZT Shortcodes
 * A powerful Joomla plugin to help effortlessly customize your own content and style without HTML code knowledge
 *
 * @version     1.0.0
 * @author      ZooTemplate
 * @email       support@zootemplate.com
 * @link        http://www.zootemplate.com
 * @copyright   Copyright (c) 2015 ZooTemplate
 * @license     GPL v2
 */
?>

<div class="zt-counter-wrap">
    <span class="chart <?php echo $options->get('extra-class'); ?>"
          data-easing="<?php echo $options->get('easing'); ?>"
          data-percent="<?php echo $options->get('percent'); ?>"
          data-barcolor="<?php echo $options->get('barColor'); ?>"
          data-trackcolor="<?php echo $options->get('trackColor'); ?>"
          data-scalelength="<?php echo $options->get('scaleLength'); ?>"
          data-linecap="<?php echo $options->get('lineCap'); ?>"
          data-linewidth="<?php echo $options->get('lineWidth'); ?>"
          data-size="<?php echo $options->get('size'); ?>"
          data-duration="<?php echo $options->get('duration'); ?>"
          style="width: <?php echo $options->get('size') . 'px'; ?>; height: <?php echo $options->get('size') . 'px'; ?>; line-height: <?php echo $options->get('size') . 'px'; ?>">

        <?php if ($options->get('content-type') == 'percent') {
            echo '<span class="percent"></span>';
        } elseif ($options->get('content-type') == 'icon') {
            echo '<span><i class="' . $options->get('icon') . '"></i></span>';
        } else {
            echo '<span>' . $content . '</span>';
        } ?>


    </span>
</div>