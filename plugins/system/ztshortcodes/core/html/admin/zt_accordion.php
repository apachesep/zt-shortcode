<?php
$prefix = 'zo2-sc-';
?>

<div id="<?php echo $prefix . 'accordion-container' ?>">
    <div id="<?php echo $prefix . 'accordion-element' ?>">
        <div class="form-group clearfix">
            <label for="<?php echo $prefix . 'accordion-title' ?>">Accordion Title</label>
            <input type="text" class="form-control" id="<?php echo $prefix . 'accordion-title' ?>" placeholder="Accordion Title">
        </div>
        <div class="form-group clearfix">
            <label for="<?php echo $prefix . 'accordion-title' ?>">Accordion id</label>
            <input type="text" class="form-control" id="<?php echo $prefix . 'accordion-id' ?>" placeholder="Enter id">
        </div>
        <div class="form-group clearfix">
            <label for="<?php echo $prefix . 'accordion-content' ?>">Accordion Content</label>
            <textarea placeholder="Content Accordion" rows="3" class="form-control" id="<?php echo $prefix . 'accordion-content' ?>"></textarea>
        </div>
        <div class="checkbox">
            <label>
                <input type="checkbox" id="<?php echo $prefix . 'accordion-active'; ?>"> Active
            </label>
        </div>
    </div>
</div>
<div class="form-group clearfix">
    <button class="btn btn-default" type="button" id="<?php echo $prefix . 'new-accordion' ?>">Add New Accordion</button>
</div>