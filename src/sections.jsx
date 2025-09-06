import konino from "./assets//konino.png";

const Sections = () => {
  return (
    <section className="px-[130px] max-w-[1440px] mx-auto px-4 py-6">
      <div className="!p-4 flex justify-between items-center mb-5">
        <h2 className="text-[#303030] text-[42px]">Акции</h2>
        <a className="text-[#46C578] hover:underline" href="#">
          Cмотреть все
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="bg-[#46C578] rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              В корзину
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="border flex gap-4 rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              <a className="text-[#46C578]" href="">
                -
              </a>{" "}
              1{" "}
              <a className="text-[#46C578]" href="#">
                +
              </a>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="bg-[#46C578] rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              В корзину
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="border flex gap-4 rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              <a className="text-[#46C578]" href="">
                -
              </a>{" "}
              1{" "}
              <a className="text-[#46C578]" href="#">
                +
              </a>
            </button>
          </div>
        </div>
      </div>
      <div>
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-[#303030] text-[42px]">Популярные товары</h2>
        <a className="text-[#46C578] hover:underline" href="#">
          Cмотреть все
        </a>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mb-[20px">
        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="bg-[#46C578] rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              В корзину
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="border flex gap-4 rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              <a className="text-[#46C578]" href="">
                -
              </a>{" "}
              1{" "}
              <a className="text-[#46C578]" href="#">
                +
              </a>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="bg-[#46C578] rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              В корзину
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="border flex gap-4 rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              <a className="text-[#46C578]" href="">
                -
              </a>{" "}
              1{" "}
              <a className="text-[#46C578]" href="#">
                +
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="bg-[#46C578] rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              В корзину
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="border flex gap-4 rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              <a className="text-[#46C578]" href="">
                -
              </a>{" "}
              1{" "}
              <a className="text-[#46C578]" href="#">
                +
              </a>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="bg-[#46C578] rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              В корзину
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="border flex gap-4 rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              <a className="text-[#46C578]" href="">
                -
              </a>{" "}
              1{" "}
              <a className="text-[#46C578]" href="#">
                +
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="bg-[#46C578] rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              В корзину
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="border flex gap-4 rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              <a className="text-[#46C578]" href="">
                -
              </a>{" "}
              1{" "}
              <a className="text-[#46C578]" href="#">
                +
              </a>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="bg-[#46C578] rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              В корзину
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex justify-start"><img src={konino} alt="" /></div>
          <h4 className="text-[#000000] text-[18px]">
            Конина тушеная Улан, есть возможность в 2 строки
          </h4>
          <p className="text-[#46C578] text-[15px]">В наличии: 11 шт.</p>
          <h2 className="!pb-[30px] text-[#303030] text-[15px]">Вес: 130гр</h2>
          <p className="text-[#D6D5D5] text-[18px]">28 030 тг.</p>
          <div className="flex items-center gap-2">
            <h3 className="text-[#FF3D3D] text-[24px]">24 320 тг.</h3>
            <button className="border flex gap-4 rounded-lg !px-4 !py-2 [text-[#FFFFFF] text-[15px]">
              <a className="text-[#46C578]" href="">
                -
              </a>{" "}
              1{" "}
              <a className="text-[#46C578]" href="#">
                +
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Sections;
