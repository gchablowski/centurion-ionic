'use strict';

describe('contact page', function () {

    beforeEach(function () {
        browser.get('/#tour/4');
    });

    /*  it('Should have a title', function () {
     expect(browser.getTitle()).toEqual('Galvin at Centurion');
     });
     
     it('Should get a form', function () {
     var elements = element.all(protractor.By.css('form'));
     expect(elements.count()).toEqual(1);
     });
     */

    it('should show an error when I submit without fill the term fields', function () {
        var elements = element.all(protractor.By.css('.booking-form'));

        elements.submit().then(function () {
            var message = element.all(protractor.By.css('.show-message'));
            var title = element.all(protractor.By.css('.message-title')); 
            
            expect(message.count()).toEqual(1);
            expect(title.getText()).toEqual([ 'Terms and Conditions' ]);
        });
    });

    it('should show an error when I submit without fill all fields', function () {
        var elements = element.all(protractor.By.css('#terms'));

        elements.click();
        
        var form = element.all(protractor.By.css('.booking-form'));

        form.submit().then(function () {
            var message = element.all(protractor.By.css('.show-message'));
            var title = element.all(protractor.By.css('.message-title')); 

            expect(message.count()).toEqual(1);
            expect(title.getText()).toEqual([ 'Invalid Details' ]);
        });
    });

    /*test teh form when it will work*/

});