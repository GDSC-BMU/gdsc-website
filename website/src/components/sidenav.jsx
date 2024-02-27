import React, { useEffect } from 'react';

const ShuffleLetters = () => {
  useEffect(() => {
    const velocity = 85;

    const shuffleElement = document.querySelectorAll('.shuffle');

    shuffleElement.forEach(item => {
      item.setAttribute('data-text', item.textContent);
    });

    const shuffle = (o) => {
      for (let j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
    };

    const shuffleText = (element, originalText) => {
      const elementTextArray = [];
      let randomText = [];

      for (let i = 0; i < originalText.length; i++) {
        elementTextArray.push(originalText.charAt(i));
      }

      const repeatShuffle = (times, index) => {
        if (index === times) {
          element.textContent = originalText;
          return;
        }

        setTimeout(() => {
          randomText = shuffle(elementTextArray);
          for (let i = 0; i < index; i++) {
            randomText[i] = originalText[i];
          }
          randomText = randomText.join('');
          element.textContent = randomText;
          index++;
          repeatShuffle(times, index);
        }, velocity);
      };
      repeatShuffle(element.textContent.length, 0);
    };

    shuffleElement.forEach(item => {
      item.addEventListener('mouseenter', () => {
        shuffleText(item, item.getAttribute('data-text'));
      });
    });

    return () => {
      shuffleElement.forEach(item => {
        item.removeEventListener('mouseenter', () => {
          shuffleText(item, item.getAttribute('data-text'));
        });
      });
    };
  }, []);

  return (
    <>
      <nav className="bg-blue-500 p-6">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Shuffle Letters</span>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <ul className="flex justify-end">
              <li className="mr-3">
                <a href="#" className="text-black font-medium tracking-wider	 text-lg hover:text-red-600 shuffle">ABOUT</a>
              </li>
              <li className="mr-3">
                <a href="#" className="text-black font-medium tracking-wider	 text-lg hover:text-red-600 shuffle">TEAM</a>
              </li>
              <li>
                <a href="#" className="text-black font-medium tracking-wider	 text-lg hover:text-red-600 shuffle">JOIN</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
};

export default ShuffleLetters;
