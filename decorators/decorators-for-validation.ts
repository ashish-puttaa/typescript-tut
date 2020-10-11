(() => {
   interface ValidatorConfig {
      [property: string]: {
         [validatableProperty: string]: string[]; // ['required', 'positive']
      };
   }

   const registeredValidators: ValidatorConfig = {};

   function Required(target: any, propertyName: string) {
      registeredValidators[target.constructor.name] = {
         ...registeredValidators[target.constructor.name],
         [propertyName]: ['required'],
      };
   }

   function PositiveNumber(target: any, propertyName: string) {
      registeredValidators[target.constructor.name] = {
         ...registeredValidators[target.constructor.name],
         [propertyName]: ['positive'],
      };
   }

   function validate(obj: any) {
      const objValidatorConfig = registeredValidators[obj.constructor.name];

      if (!objValidatorConfig) {
         true;
      }

      let isValid = true;

      for (const property in objValidatorConfig) {
         const validatorsArr = objValidatorConfig[property];

         for (const validator of validatorsArr) {
            switch (validator) {
               case 'required':
                  isValid = isValid && !!obj[property];
                  break;

               case 'positive':
                  isValid = isValid && obj[property] > 0;
                  break;
            }
         }
      }

      return isValid;
   }
   class Course {
      @Required
      title: string;

      @PositiveNumber
      price: number;

      constructor(title: string, price: number) {
         this.title = title;
         this.price = price;
      }
   }

   const courseForm = document.querySelector('form')!;

   courseForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const titleEl = document.getElementById('course-title') as HTMLInputElement;
      const priceEl = document.getElementById('course-price') as HTMLInputElement;

      const title = titleEl.value;
      const price = +priceEl.value;

      const createdCourse = new Course(title, price);

      if (!validate(createdCourse)) {
         alert('Invalid input. Please try again!');
         return;
      } else {
         console.log({ createdCourse });
      }
   });
})();
