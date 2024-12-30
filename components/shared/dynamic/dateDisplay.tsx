export default function DateDisplay() {
    const formatFullDate = () => {
      return new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
    };
  
    return (
      <div className="text-sm text-gray-600 whitespace-nowrap hidden md:inline">
        {formatFullDate()}
      </div>
    );
  }