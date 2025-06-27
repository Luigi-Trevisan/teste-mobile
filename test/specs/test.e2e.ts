describe('Example Test', () => {
  it('should click on username field', async () => {
//android.widget.TextView[@text="standard_user"]
const elemento = await $('//android.widget.EditText[@content-desc="test-Username"]');
await elemento.setValue('standard_user');
/* */
const password = await $('//android.widget.EditText[@content-desc="test-Password"]');
await password.setValue('secret_sauce');

const loginInput = await $('~test-LOGIN');
await loginInput.click();

const backpack_item = await $('(//android.widget.TextView[@text="ADD TO CART"])[1]');
await backpack_item.click();


const enter_cart = await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView');
await enter_cart.click();


const enter_checkout = await $('//android.view.ViewGroup[@content-desc="test-CHECKOUT"]');
await enter_checkout.click();

const first_name = await $('//android.widget.EditText[@content-desc="test-First Name"]');
await first_name.setValue('John');
const last_name = await $('//android.widget.EditText[@content-desc="test-Last Name"]');
await last_name.setValue('Doe');

const postal_code = await $('//android.widget.EditText[@content-desc="test-Zip/Postal Code"]');
await postal_code.setValue('69900156');

const click_continue = await $('//android.view.ViewGroup[@content-desc="test-CONTINUE"]');
await click_continue.click();

const click_finish = await $('//android.view.ViewGroup[@content-desc="test-FINISH"]');
await click_finish.click();








});
});