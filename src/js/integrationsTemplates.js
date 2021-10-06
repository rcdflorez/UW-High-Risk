const htmlTemplates = {
  Berbix: `<div class="step-1 py-2 col-11 mx-auto" id="berbixArea">
    <div class="BerBix-place-holder justify-content-center">
    <div class='spinner'><div class='cube1'></div><div class='cube2'></div></div>
    </div>
    </div>`,
  Lendmate: `<div class="step-2 col-11 mx-auto">
    <h1 class="my-sm-4 heading-title col-md-11 mx-auto" >Please, link your bank account to avoid issues when receiving your funds.</h1>
    
    <div class="row justify-content-center">
      <div class="col" >
    
        <iframe id="lendMateContainer" frameborder="0"></iframe>
    
        
      </div>
    </div><br>
    <p style="font-size: 17px;">If you are having trouble with bank account verification, you can upload your recent three banks statements <a class="uploadLink" id="uploadLink" href="#">here</a> instead. </p>
    </div>`,
  Stripe: `<div class="step-3 col-11 mx-auto">
    <p>Please provide your Debit card to schedule payments. For your convenience, we also allow additional payment methods</p>
    <h2 class="text-start my-4">Debit Card</h2>
    
    <h4 class="text-start">Card nformation</h4>
    <div id="card-errors" role="alert"></div>
    
      
    
              <div class="row d-flex text-start my-4">
                <div class="form-group col-12 col-md-7">
                    <label for="cardNumber">Debit Card Number</label> <span>* </span>
                    <span id="card-number" class="form-control">
                    </span>
    
     
                </div>
                <div class="form-group col-12 col-md-3">
                    <label for="expration">Expiration</label> <span>* </span>
                    <span id="card-exp" class="form-control"></span>
                </div>
                <div class="form-group col-12 col-md-2">
                    <label for="cvv">CVV</label> <span>* </span>
                    <span id="card-cvc" class="form-control"></span>
                </div>
        
                
         
    
    </div>
    
    
    
    
    <h4 class="text-start">Billing Address</h4>
    <div class="row d-flex text-start my-4">
    
      <div class="form-group col-12 col-md-6">
        <label for="firstName">First Name</label>
        <span>* </span>
        <input type="text" required pattern="^[0-9]{5}(?:-[0-9]{4})?$" class="" name="firstName" id="firstName"/>
      </div>
    
      <div class="form-group col-12 col-md-6">
          <label for="lastname">Last Name</label>
          <span>* </span>
          <input type="text" pattern="^[a-zA-Z ]{2,40}$" required class="" name="lastname" id="lastname" />
      </div>
    
    </div>
    
    <div class="row d-flex text-start my-4">
    
      <div class="form-group col-12">
        <label for="address">Address</label>
        <span>* </span>
        <input type="text" required pattern="^[0-9]{5}(?:-[0-9]{4})?$" class="" name="address" id="address"/>
      </div>
    
    </div>
    
    <div class="row d-flex text-start my-4">
    
      <div class="form-group col-12 col-md-7">
        <label for="city">City</label>
        <span>* </span>
        <input type="text" required pattern="^[0-9]{5}(?:-[0-9]{4})?$" class="" name="city" id="city"/>
      </div>
    
      <div class="form-group col-12 col-md-3">
          <label for="State">State</label>
          <span>* </span>
          <input type="text" pattern="^[a-zA-Z ]{2,40}$" required class="" name="State" id="State" />
      </div>
    
      <div class="form-group col-12 col-md-2">
        <label for="zip">Zip</label>
        <span>* </span>
        <input type="text" pattern="^[a-zA-Z ]{2,40}$" required class="" name="zip" id="zip" />
      </div>
    
    </div>
    
    <p class="text-start text-disclaimer">
      *Note that this information is required for verification purposes, however, you have alternatives to debit card payment. Please contact us at <a href="">844-355-5626</a> or <a href=""> support@explorecredit.com</a>  if you would like to select a different payment method.
    </p>
    
    <button class="btn btn-access btn-cancel my-2 my-md-5"><h5 class="m-0">Cancel</h5></button>
    <button class="btn btn-access my-2 my-md-5" id="card-button"><h5 class="m-0">Submit</h5></button>
    
    </div>`,
};
