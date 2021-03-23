import React, { FC } from 'react'

interface BracketProps {
  type: string;
  color: string;
}

type styleType = {
  text: string;
  startPosition: number;
  textAlign: string;
}

type itemType = {
  [key:string]: styleType;
}

const distance = 200;
const item:itemType = {
  left: {
    text: '{',
    startPosition: distance,
    textAlign: 'right'
  },
  right: {
    text: '}',
    startPosition: -distance,
    textAlign: 'left'
  }
}

const HeroBracket:FC<BracketProps> = ({ type, color }) => {
  return (
    <>
      <div className={'column is-hidden-mobile has-text-' + item[type].textAlign}>
        { item[type].text }
        <style jsx>{`
                    div {
                        color: ${color};
                        font-size: 15em;
                        -webkit-animation: move 1s;
                        animation: move 1s;
                        user-select: none;
                    }
                    @keyframes move {
                        from {
                            transform: translate(${item[type].startPosition}px, 0);
                        }
                        to {
                            transform: translate(0px, 0px);
                        }
                    }
                `}</style>
      </div>
    </>
  )
}


export default HeroBracket;
