
import dateImg from '../../assets/date.png'
import iconImg from '../../assets/Ellipse 22.png'

const Cards = ({card}) => {
   
    return (
        <div>
                <div class="card w-96 bg-base-100 card-sm shadow-sm">
                    <div class="card-body">
                        <div className='flex justify-between items-center'>
                            <h2 class="card-title">{card.title}</h2>
                            <div className='flex gap-2 border-2 rounded bg-green-200'>
                               <img src={iconImg} alt="" /> <p className='text-black-100'>{card.status}</p>
                            </div>
                        </div>
                        <p>{card.description}</p>
                        <div className='flex justify-between items-center'>
                            <div>
                                <p># {card.id} <span>{card.priority}</span></p>
                            </div>
                            <div className='flex justify-between items-center gap-5'>
                                <p>{card.customer}</p> <img src={dateImg} /><span>{card.createdAt}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Cards;