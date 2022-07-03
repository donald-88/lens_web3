import Avatar from '../components/avatar'
import Image from 'next/image'

const PostCard = (props) => {
  return(
    <div className="flex flex-col mb-[8px] py-2">

      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="w-[40px] h-[40px]">
            <Avatar>
              <Image src={props.image} width="38px" height="38px"/>
            </Avatar>
          </div>

          <div className="flex flex-col h-full items-start justify-center px-2">
            <h4 className="font-medium leading-3">
              {props.name}
            </h4>
            <p className="text-secondary font-light text-[11px]">@{props.handle}</p>
          </div>
        </div>

        <button>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10Z"
              stroke="#000000"
              strokeWidth="1.5"/>
            <path
              d="M19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10Z"
              stroke="#000000"
              strokeWidth="1.5"/>
            <path
              d="M12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
              stroke="#000000"
              strokeWidth="1.5"/>
          </svg>
        </button>

      </div>

      <div className="flex justify-start w-full py-4">
        <p className="break-all text-ellispis text-center">
          {props.post}
        </p>
      </div>

      <div className="flex w-full justify-evenly">

        <div className="flex">
          <button>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"/>
              <path
                d="M18.57 22H14C11.71 22 10.57 20.86 10.57 18.57V11.43C10.57 9.14 11.71 8 14 8H18.57C20.86 8 22 9.14 22 11.43V18.57C22 20.86 20.86 22 18.57 22Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"/>
              <path
                d="M14.87 15H18.13"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"/>
              <path
                d="M16.5 16.6301V13.3701"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"/>
            </svg>
          </button>
          <p className="px-[4px]">
            {props.collects}
          </p>
        </div>

        <div className="flex items-center">
          <button>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"/>
            </svg>
          </button>
          <p className="px-[4px]">
            {props.mirrors}
          </p>
        </div>

        <div className="flex items-center">
          <button>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.5 14.99L15.49 20.01"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"/>
              <path
                d="M3.5 14.99H20.5"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"/>
              <path
                d="M3.5 9.00999L8.51 3.98999"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"/>
              <path
                d="M20.5 9.01001H3.5"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"/>
            </svg>

          </button>
          <p className="px-[4px]">
            {props.mirrors}
          </p>
        </div>

        <div className="flex items-center">
          <button>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"/>
              <path
                d="M8.5 12H15.5"
                stroke="#000000"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"/>
            </svg>
          </button>
          <p className="px-[4px]">
            {props.comments}
          </p>
        </div>
      </div>


    </div>
  )
}

export default PostCard
