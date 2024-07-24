

function ModalChooseCustomer( props  ) {
   const 
      tagStyle = `
         <style>
            modal-display[display] {
               display: grid;
            }
            modal-display {
               display: none;
               place-items: end;
               width: 100%;
               height: 100%;
               position: fixed;
               top: 0;
               left: 0;
               background: #0005;
               background: #1b1d22;
               z-index: 99;
            }

            modal-display[display] > modal[display] {
               top: 0;
            }

            modal {
               background: var( --bg );
               box-shadow: #0005 0 6px 35px;
               border-radius: 2.5em 2.5em 0 0;
               width: calc( 100% - 1.2em );
               min-height: 40%;
               max-height: 100%;
               overflow-y: scroll;
               transition: .5s ease-in all;
               position: relative;
               top: 100%;
            }
            modal-display[choose-customer] > modal {
               background: var( --modal-header3, #212329 );
            }
            modal-display[choose-customer] > modal > header > tt {
               color: var( --appbar-title );
            }
            modal-display[choose-customer] > modal > content {
               border-radius: 2.5em 2.5em 0 0;
               padding-top: 2.5em;
               background: var( --bg );
            }
            modal::-webkit-scrollbar {
               width: 0px;
            }
            
            modal input {
               border-radius: 100em;
            }

            modal-option { cursor: pointer; }

            #input_tempCustomer {
               background: var( --bg2 );
               width: 60%;
            }

            #btn_tempCustomer {
               background: var( --btn-st3, #daa520 );
               color: var( --appbar-title );
               max-width: 56px;
               width: 56px;
               aspect-ratio: 1;
            }
         </style>
      `
      ,
      extractedItems = []
   ;
   let 
      customers = []
      ,
      readyStringItems = ""
   ;
   
   if( localStorage.getItem( "ea.customers" ) ) {
      customers = [
         ...JSON.parse( localStorage.getItem( "ea.customers" ) )
      ];
   }
   
   $$( `modal-choose-customer` ).forEach( modal => {
      customers.forEach( customer => {
         extractedItems.push( `
            <customer section horizontal cust_id="${ customer.id }" cust_name="${ customer.nome }">
               <header>
                  <content>
                     <picture>
                        <img src=${
                           customer.gender == "feminino" ?
                              "../Assets/imgs/Avatar/default_avatar_fem_ico.webp"
                              : 
                              "../Assets/imgs/Avatar/default_avatar_masc_ico.webp"
                        } alt="">
                     </picture>
                  </content>
               </header>
               <contents section>
                  <content>
                     <name>${ customer.nome }</name>
                     <phone>${ customer.whatsapp || customer.cellphone }</phone>
                  </content>
               </contents>
            </customer>
         ` );
      } );
   } );
   readyStringItems = extractedItems.join( "," );
   readyStringItems = readyStringItems.split( "," ).join( " " );
   
   _( readyStringItems );

   $$( `modal-choose-customer` ).forEach( modal => {
      /* return(  */modal.outerHTML = (`
         <modal-display choose-customer>
            ${ tagStyle }
            <modal section id="">
               <header content>
                  ${ modal.querySelector( "header" ) ? modal.querySelector( "header" ).innerHTML : "" }  
               </header>
               <temp-customer section>
                  <content>
                     <label id="label_tempCustomer">
                        <st6>Cliente sem cadastro</st6>
                        <duo gap>
                           <input type="text" id="input_tempCustomer" placeholder="Cliente sem cadastro">
                           <input type="button" id="btn_tempCustomer" value="ok">
                        </duo>
                     </label>
                  </content>
               </temp-customer>
               <content gap>
                  <customers section>
                     ${ readyStringItems }  
                  </lista>
               </content>   
            </modal>
         </modal-display>
      `) /* ) */;
   } );
   $$( `modal-display[choose-customer] customer` ).forEach( option => {
      option.addEventListener( "click", () => {
         $( `${ props.input }` ).value = option.getAttribute( "cust_name" );
         newReceipt.clientID = option.getAttribute( "cust_id" );
         $( `modal-display[ choose-customer ] modal` ).removeAttribute( "display" );
         setTimeout( () => {
            $( `modal-display[ choose-customer ]` ).removeAttribute( "display" );
         }, 500 );
      } );
   } );
   $( props.input ).addEventListener( "click", () => {
      $( props.input ).setAttribute( "readonly", "" );
      if( !$( `modal-display[ choose-customer ]` ).getAttribute( "display" ) ) {
         $( `modal-display[ choose-customer ]` ).setAttribute( "display", "" );
         setTimeout( () => {
            $( `modal-display[ choose-customer ] modal` ).setAttribute( "display", "" );
         }, 5 );
      }
   } );
   $( `modal-display[choose-customer] #btn_tempCustomer` ).addEventListener(
      "click", () => {
         if( $( "modal-display[choose-customer] #input_tempCustomer" ).value ) {
            $( `${ props.input }` ).value = $( "modal-display[choose-customer] #input_tempCustomer" ).value;
            newReceipt.clientID = "53m-c4d45tr0";
            $( `modal-display[ choose-customer ] modal` ).removeAttribute( "display" );
            setTimeout( () => {
               $( `modal-display[ choose-customer ]` ).removeAttribute( "display" );
            }, 500 );
         }
      }
   );
}


/* == [ usage ] == == == == == == 
example without header
   <modal name-of-html-tag-property></modal>

example with header
   <modal name-of-html-tag-property>
      <header>
         <content>
            <h2>Título</h2>
         </content>
      </header>
   </modal>

script example
   Modal( {
      tag: "name-of-html-tag-property"
      ,
      items: [
         "pix", 
         "cartão de crédito", 
         "cartão de débito", 
         "dinheiro",
      ]
      ,
      input: "#input_id_that_will_trigger_modal"
   } );
== == == == == == == == == */