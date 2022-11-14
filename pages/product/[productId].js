import { useRouter } from 'next/router'
import Image from 'next/image'
import Script from 'next/script'

import { useEffect } from 'react'
import Head from 'next/head'


export default function Product() {
  const router = useRouter()
  const { productId } = router.query  



  useEffect(()=>{
    
   

  },[])

return (

  <>
<Head>
<script src="/load-segment.js">
</script>
</Head>

  <section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
     
      <Image src= {`/images/${productId}.jpeg`} alt="Just an owl" height={200} width={200} 
              className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" style={{height:"400px !important"}} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">OWL NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Owl {(productId+1)}</h1>
        <div className="flex mb-4">
          
          
        </div>
         
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
          <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Chat</button>
         
        </div>
      </div>
    </div>
  </div>
</section>

<Script onLoad={()=>{


analytics.page('Product', {
  title: `Owl ${(location.pathname).substr(9)}`,
});

const anonymousId = analytics?._user?.anonymousId();

 const appConfig = {
  accountSid:"AC75903cb51ef4da2b3cdbafed81aae0a4",
  flexFlowSid:"FOe9b63d0ecee55421275d78cfe46fe687",
  
  context: {
    locationOrigin: window.location.origin,
    segmentId: anonymousId,
  },

  startEngagementOnInit: false,
    preEngagementConfig: {
      description: "Please provide some information",
    fields: [
        {
            label: "What is your name?",
            type: "InputItem",
            attributes: {
                name: "friendlyName",
                type: "text",
                required: true
            }
        },
        {
          label: "What is your phone number?",
          type: "InputItem",
          attributes: {
              name: "phoneNumber",
              type: "text",
              required: true
          }
      },
        {
            label: "What is your question?",
            type: "TextareaItem",
            attributes: {
                name: "question",
                type: "text",
                placeholder: "Type your question here",
                required: false,
                rows: 5
            }
        }, 
    ],
    }
   
};

Twilio.FlexWebChat.Actions.on("afterStartEngagement", (payload) => {
  const { friendlyName, phoneNumber } = payload.formData;
  if (!friendlyName) return;

  analytics.identify(friendlyName, {name:friendlyName,phoneNumber});
  
});

Twilio.FlexWebChat.renderWebChat(appConfig);
}} src="https://assets.flex.twilio.com/releases/flex-webchat-ui/2.9.1/twilio-flex-webchat.min.js" />

</>
)
  

}