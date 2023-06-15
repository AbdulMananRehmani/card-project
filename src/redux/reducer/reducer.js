const INIT_STATE={
    carts:[]
}

export const cartreducer=(state=INIT_STATE ,action)=>{

    switch (action.type){

        case "ADD_CART":


        const cardindex=state.carts.findIndex((ele)=>ele.id === action.payload.id)

        if(cardindex >= 0){
            state.carts[cardindex].qnty +=1
        }

        else{
            const temp ={...action.payload ,qnty : 1}
            
            return{
                ...state,
                carts:[...state.carts,temp]
            }
        }


              
        case "RMV_CART":
            const data = state.carts.filter((el)=>el.id !== action.payload); 
 
            return {
                ...state,
                carts:data
            }


            case 'RMV_ONE':


            const cardindex_rmv=state.carts.findIndex((ele)=>ele.id === action.payload.id)

            if(state.carts[cardindex_rmv].qnty >=1)
            {
                const dltitems=state.carts[cardindex_rmv].qnty -=1;


                return {
                    ...state,
                    carts:[...state.carts]
                }

            }
            

            default:
                 return state
    }

}