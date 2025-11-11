type TCard = {
    children: any
};

function Card({children}: TCard) {
    return (
        <div className="border border-[#2E2B3F] bg-[#0F0F1A] rounded-xl p-5">
            {children}
        </div>
    );
}

export default Card;