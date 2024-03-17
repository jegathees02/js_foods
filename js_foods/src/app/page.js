import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image className="w-fit h-fit" 
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
      width={1000}
      height={1000}
      />
    </div>
  );
}
