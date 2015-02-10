<?php
$prefix = 'zo2-sc-';
?>

<form>
    <div class="form-group clearfix">
        <label for="<?php echo $prefix.'divider-type'; ?>">Type</label>
        <select id="<?php echo $prefix.'divider-type'; ?>" class="form-control">
            <option value="hr">HR</option>
            <option value="thin">Thin</option>
            <option value="fat">Fat</option>
            <option value="dotted">Dotted</option>
            <option value="text-only">Go to top 1</option>
            <option value="icon-type-1">Go to top icon 1</option>
            <option value="icon-type-2">Go to top icon 2</option>
        </select>
    </div>
    <div class="form-group clearfix" id="<?php echo $prefix.'field-text'; ?>" style="display: none;">
        <label for="<?php echo $prefix.'divider-text'; ?>">Text</label>
        <input type="label" class="form-control" id="<?php echo $prefix.'divider-text'; ?>" placeholder="Enter text content">
    </div>
    <div class="form-group clearfix" id="<?php echo $prefix.'field-icon'; ?>" style="display: none;">
        <label for="<?php echo $prefix.'divider-icon'; ?>">Icon (please select an icon)</label>
        <div id="list-icon-divider">
            <?php echo getAwesome(); ?>
        </div>
    </div>
</form>