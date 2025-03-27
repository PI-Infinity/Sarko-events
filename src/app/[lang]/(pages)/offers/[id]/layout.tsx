export default function Layout({ children }: any) {
  return (
    <>
      <div className="flex-grow w-full overflow-hidden">{children}</div>
    </>
  );
}
