<?php
$prefix = 'zo2-sc-';
?>

<form>
    <div class="form-group clearfix">
        <label for="<?php echo $prefix.'message-box-type'; ?>">Type</label>
        <select id="<?php echo $prefix.'message-box-type'; ?>" class="form-control">
            <option value="success">Success</option>
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="danger">Danger</option>
        </select>
    </div>
    <div class="form-group clearfix">
        <label for="<?php echo $prefix.'message-box-icon'; ?>">Icon</label>
        <div id="list-icon-message-box">
            <?php echo getAwesome(); ?>
        </div>
    </div>
    <div class="form-group clearfix">
        <label for="<?php echo $prefix.'message-box-content'; ?>">Content</label>
        <textarea placeholder="Content Message Box" rows="3" class="form-control" id="<?php echo $prefix.'message-box-content'; ?>"></textarea>
    </div>
    <div class="form-group clearfix">
        <label for="<?php echo $prefix.'message-box-class'; ?>">Extra Class</label>
        <input type="label" class="form-control" id="<?php echo $prefix.'message-box-class'; ?>" placeholder="Enter Extra Class Message Box">
    </div>
</form>