import Image from "next/image"

const thumb_one ="/images/history/history-thumb-1.jpg"
const thumb_two ="/images/history/history-thumb-2.jpg"
const thumb_three ="/images/history/history-thumb-3.jpg"
const thumb_four ="/images/history/history-thumb-4.jpg"
const thumb_five ="/images/history/history-thumb-5.jpg"
const thumb_six ="/images/history/history-thumb-6.jpg"
const thumb_seven ="/images/history/history-thumb-7.jpg"
const thumb_eight ="/images/history/history-thumb-8.jpg"

const data:AboutHistory[] = [
    {
        title: "CREATE A COMPANY",
        description: "Gardening is the practice of growing & cultivating plants as part",
        image: thumb_one,
        year: "2000",
    },
    {
        title: "CREATE A COMPANY",
        description: "Gardening is the practice of growing & cultivating plants as part",
        image: thumb_two,
        year: "2005",
    },
    {
        title: "CREATE A COMPANY",
        description: "Gardening is the practice of growing & cultivating plants as part",
        image: thumb_three,
        year: "2010",
    },
    {
        title: "CREATE A COMPANY",
        description: "Gardening is the practice of growing & cultivating plants as part",
        image: thumb_five,
        year: "2015",
    },
    {
        title: "CREATE A COMPANY",
        description: "Gardening is the practice of growing & cultivating plants as part",
        image: thumb_six,
        year: "2023",
    },
    {
        title: "CREATE A COMPANY",
        description: "Gardening is the practice of growing & cultivating plants as part",
        image: thumb_seven,
        year: "2023",
    },
    {
        title: "CREATE A COMPANY",
        description: "Gardening is the practice of growing & cultivating plants as part",
        image: thumb_eight,
        year: "2023",
    },
]


const Histroy = () => {
  return (
    <div className="history-area">
        <div className="container-history">
            <div className="history-chart">
              <div className=""></div>
                {data.map((item, index) =>(
              <div className="single-year-wrapper first-year" key={index}>
                  <div className="single-year">
                    <div className="history-year">{item.year}</div>
                    <div className="history-thumb">
                      <Image src={`${item?.image}`} width={300} height={300} alt="histroy-image"/>
                    </div>
                    <div className="history-content-wrapper">
                      <div className="history-content">
                        <h1 className="history-title">{item?.title}</h1>
                        <p>{item?.description}</p>
                      </div>
                    </div>
                  </div>
                  
              </div>
              ))}
         
            </div>

        </div>
    </div>
  )
}

export default Histroy