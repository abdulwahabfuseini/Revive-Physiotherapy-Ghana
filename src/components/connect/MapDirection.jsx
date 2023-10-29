const MapDirection = () => {
  return (
    <div className="w-full h-[600px]">
      <header className="text-2xl sm:text-3xl font-medium text-center pt-14 pb-6">
        {" "}
        Locate Us
      </header>
      <div>
        <iframe
          title="googleMap"
          width="100%"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%20ACHIMOTA,%20Accra,%20Ghana+(Revive%20Physiotherapy%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/population/">
            Calculate population in area
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default MapDirection;
