import Image from 'next/image'
export default function Home() {
  return (


    <div className="isolate bg-white">
  <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
    <svg className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
      <defs>
        <linearGradient id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
          <stop stop-color="#9089FC"></stop>
          <stop offset="1" stop-color="#FF80B5"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>

  <main>
  <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2 ">
    <div className="relative px-6 lg:px-8">
      <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
        <div>
   
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">Owl Shop</h1>
       
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fill-opacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
              <defs>
                <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
 


{
  [...Array(5).keys()].map(p=>(
<a className="w-full px-4 lg:px-0" href={`./product/${p}`}>
      <div className="p-3 bg-white rounded shadow-md">
        <div className="">
          <div className="relative w-full mb-3 h-62 lg:mb-0">
            <Image src= {`/images/${p}.jpeg`} alt="Just an owl" height={200} width={200} 
              className="object-fill w-full h-fit rounded" style={{height:"400px !important"}} />
          </div>
          <div className="flex-auto p-2 justify-evenly">
            <div className="flex flex-wrap ">
              <div className="flex items-center justify-between w-full min-w-0 ">
                <h2 className="mr-auto text-lg cursor-pointer hover:text-gray-900 ">
                Owl {(p+1)}
                </h2>
              </div>
            </div>
           
  
          </div>
        </div>
      </div>
    </a>
  ))
}


    
 
  
  </div>

  </main>
</div>
  )
}
