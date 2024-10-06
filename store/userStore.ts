import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import {createJSONStorage, persist,} from 'zustand/middleware'

type UserState = {
    hasFinishedOnboarding: boolean;
    toggleHasOnboarded:()=>void;
}


export const useUserStore = create(
    persist<UserState>((set)=>({ // async storage 
    hasFinishedOnboarding:false,
    toggleHasOnboarded:()=>{
        set((state)=>{
            return{
                ...state,
                hasFinishedOnboarding: !state.hasFinishedOnboarding,
            }
        })
    }
}),{
   name:'plantly-user-storage',
   storage: createJSONStorage(()=> AsyncStorage)
}
)
)