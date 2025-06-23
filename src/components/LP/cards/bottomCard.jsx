import './Cards.scss';
export default function BottomCard({ title, desc, img, button }) {
    return (
        <div className='bottom-card'>
            <h1>{title}</h1>
            <img src={img} />
            <p>{desc}</p>
            <button>{button}</button>
        </div>
    );
}