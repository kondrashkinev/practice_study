import { expect } from 'chai';
import puppeteer from 'puppeteer';
import { describe, it, before, after } from 'mocha';

describe('Triangle tests', async ()=>{
	let browser;
	let page;
	let options = {
	headless: true};
		
before(async () => {
browser = await puppeteer.launch(options);
page = await browser.newPage();
await page.goto('https://allcalc.ru/node/1051');
console.log('open browser');
 });

after(async () => {
await browser.close();
console.log('close browser');	
});

 	
 it ('Test1-тр.равнобедренный', async()=> {
	await page.type('#value1','60');
	await page.type('#value2','60');
	await page.type('#value3','60');
	await page.click('#calc > table > tbody > tr:nth-child(5) > td > input[type=button]');
	
	await page.waitForSelector('#answer > b');
	
	const actual = await page.$$eval('#answer > b', elems=>elems.map(elem=>elem.innerText));
	
	expect(actual[0]).to.eql('Треугольник равносторонний\nТреугольник остроугольный');
    	
	})
	
	it ('Test2-тр.прямоугольный', async()=> {
	
    await page.$eval('#value1', el => el.value = '3');
    await page.$eval('#value2', el => el.value = '4');
    await page.$eval('#value3', el => el.value = '5');
	
	await page.click('#calc > table > tbody > tr:nth-child(5) > td > input[type=button]');
	await page.waitForSelector('#answer > b');
	const actual = await page.$$eval('#answer > b', elems=>elems.map(elem=>elem.innerText));
	
	expect(actual[0]).to.eql('Треугольник прямоугольный\n');
    		
	});
	
		it ('Test3-тр.не_существует', async()=> {
	
    await page.$eval('#value1', el => el.value = '10');
    await page.$eval('#value2', el => el.value = '20');
    await page.$eval('#value3', el => el.value = '30');
	
	await page.click('#calc > table > tbody > tr:nth-child(5) > td > input[type=button]');
	await page.waitForSelector('#answer > b');
	const actual = await page.$$eval('#answer > b', elems=>elems.map(elem=>elem.innerText));
	
	expect(actual[0]).to.eql('Треугольник не существует');
    		
	});
	
		it ('Test2-тр.прямоугольный', async()=> {
	
    await page.$eval('#value1', el => el.value = '93');
    await page.$eval('#value2', el => el.value = '84');
    await page.$eval('#value3', el => el.value = '57');
	
	await page.click('#calc > table > tbody > tr:nth-child(5) > td > input[type=button]');
	await page.waitForSelector('#answer > b');
	const actual = await page.$$eval('#answer > b', elems=>elems.map(elem=>elem.innerText));
	
	expect(actual[0]).to.eql('Треугольник разносторонний\nТреугольник остроугольный');
    		
	});
	
		it ('Test2-тр.прямоугольный', async()=> {
	
    await page.$eval('#value1', el => el.value = '50');
    await page.$eval('#value2', el => el.value = '80');
    await page.$eval('#value3', el => el.value = '50');
	
	await page.click('#calc > table > tbody > tr:nth-child(5) > td > input[type=button]');
	await page.waitForSelector('#answer > b');
	const actual = await page.$$eval('#answer > b', elems=>elems.map(elem=>elem.innerText));
	
	expect(actual[0]).to.eql('Треугольник равнобедренный\nТреугольник тупоугольный');
    		
	});
	

});

