export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center sticky bottom-0 w-full text-gray-500 p-4 bg-primary">
      &copy; {year} Atlas School
    </div>
  );
}
