import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react"

const UseMenu = () => {
  // const [menu, setMenu] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(()=>{
  //     fetch('https://bisto-boss-server-two.vercel.app/menu')
  //     .then(res => res.json())
  //     .then(data =>{
  //         setMenu(data)

  //     })
  // }, [])
  const { data: menu = [], isLoading: loading, refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("https://bisto-boss-server-two.vercel.app/menu");
      return res.json();
    },
  });

  return [menu, loading, refetch];
};

export default UseMenu;
