import React, { useEffect, useState } from 'react';
import EduAttainment from './EduAttainment';
import HouseholdTypes from './HouseholdTypes';
import IncomeHHByType from './IncomeHHByType';
import IncomeHHT from './IncomeHHT';
import Population from './Population';
import PopulationByAge from './PopulationByAge';
import PopulationbyRace from './PopulationbyRace';
import GraphData from '../../Api/Grapgh'
import { useRouter } from "next/router";
import Link from 'next/link';
import GraphComponent from '../GraphCard';
import BlurGraphComponent from '../BlurGraphComponent';


export default function Demographic() {
    const [regionName, setRegionName] = useState([])
    const [region, setRegion] = useState([])
    const [population, setPopulation] = useState([])
    const [populationDate, setPopulationDate] = useState([])
    // const [race, setRace] = useState([])
    // const [raceDate, setRaceDate] = useState([])
    const [educationn, setEducationn] = useState([])
    const [male, setMale] = useState([])
    const [feMale, setFeMale] = useState([])
    const [percentage, setPercentage] = useState([])
    const [eduTableData, seteduTableData] = useState([])
    const [grade, setGrade] = useState([])
    const [dataPercentage, setDataPercentage] = useState([])
    const [maleCount, setMaleCount] = useState([])
    const [feMaleCount, setFeMaleCount] = useState([])
    const [age, setAge] = useState([])
    const [lowest, setlowest] = useState([])
    const [highest, sethighest] = useState([])
    const [Owner, setOwner] = useState([])
    const [renter, setRenter] = useState([])
    const [oTable, setOTable] = useState([])
    const [type, setType] = useState([])
    const [totalMedian, setTotalMedian] = useState([])
    const [maleMedian, setMaleMedian] = useState([])
    const [femaleMedian, setFemaleMedian] = useState([])
    const [AgeDepend, setAgeDepend] = useState([])
    const [OldAgeDepend, setOldAgeDepend] = useState([])
    const [ChildAgeDepend, setChildAgeDepend] = useState([])
    const [FemaleRatioVal, setFemaleRatioVal] = useState([])
    const [sexMaleRatio, setMaleSexRatio] = useState([])
    const [sexFemaleRatio, setFemleSexRatio] = useState([])
    const [MaleRatioVal, setMaleRatioVal] = useState([])
    const [tltAdlt, settltAdlt] = useState([])
    const [Senior, setSenior] = useState([])
    const [houseHolds, setHouseHolds] = useState([])
    const [Married, setMarried] = useState([])
    const [nonFamlies, setNonFamlies] = useState([])
    const [marriedFamilies, setMarriedFamilies] = useState([])
    const [income, setIncome] = useState([])
    const [Table, setTable] = useState([])
    const [AvgHouseHold, setAvgHouseHold] = useState([])
    const [label, setLabel] = useState([])
    const [mean, setMean] = useState([])
    const [median, setMedian] = useState([])
    const [medianTable, setMedianTable] = useState([])
    const [name, setName] = useState([])
    const [raceTable, setRaceTable] = useState([])
    const [race, setRace] = useState(['White', 'Black or African American', 'Some Other Race', 'Asian', 'Two or more races', 'American Indian and Alaska Native', 'Native Hawaiian and Other Pacific Islander'])
    const [percent, setPercent] = useState([13, 17, 23, 23, 4, 9, 11])
    const [user, setUser] = useState('')

    function handleChange(e) {
        setRegion(e.target.value);
        populationCountary(e.target.value)
        // populationRace(e.target.value)
        education(e.target.value)
        populationAge(e.target.value)
        RenterTable(e.target.value)
        HouseIncome(e.target.value)
        HouseType(e.target.value)

        populationRace(e.target.value)

    }
    const router = useRouter();

    const eventId = router.query.id
    useEffect(() => {
        if (typeof window !== 'undefined') {

            setUser(JSON.parse(localStorage.getItem('user')))
        }
        Region()
        setRegion('Alabama');
        populationCountary('Alabama')
        // populationRace(e.target.value)
        education('Alabama')
        populationAge('Alabama')
        RenterTable('Alabama')
        HouseIncome('Alabama')
        HouseType('Alabama')

        populationRace('Alabama')
    }, [eventId]);

    const Region = () => {
        const response = GraphData.populationRegion();
        console.log(response)
        response.then(value => {
            console.log(value)
            if (value) {
                setRegionName(value.data.Data);
            }
        })
    }
    const populationCountary = (region) => {
        const response = GraphData.population(region);
        response.then(value => {
            if (value) {
                let data1 = []
                let data2 = []
                for (const key in value.data.Data) {
                    data1.push(key.replace(',', ""))
                    data2.push(parseInt(value.data.Data[key].replace(',', "").replace(',', "")));
                }
                setPopulationDate(data1)
                setPopulation(data2)
            }
        })
    }

    const education = (region) => {
        const response = GraphData.education(region);
        response.then(value => {
            if (value) {
                setEducationn(value.data.Data[0])

                let region = []
                let percentage = []
                let male = []
                let feMale = []
                let eduTable = []
                for (const key in value.data.Data[0]) {
                    if (key !== 'Region') {
                        region.push(key)
                        let data = {
                            key: Math.random(),
                            name: key,
                            count: value.data.Data[0][key],
                            percentage: value.data.Data[1][key],
                        }
                        eduTable.push(data)
                    }
                }
                for (const key in value.data.Data[1]) {
                    if (key !== 'Region') {
                        percentage.push(parseInt(value.data.Data[1][key].replace('%', "")))
                    }

                }
                for (const key in value.data.Data[2]) {
                    if (key !== 'Region') {
                        male.push(value.data.Data[2][key].replace(',', "").replace(',', ""))
                    }

                }
                for (const key in value.data.Data[3]) {
                    if (key !== 'Region') {
                        feMale.push(value.data.Data[3][key].replace(',', "").replace(',', ""))
                    }

                }
                setMale(male)
                setFeMale(feMale)
                setPercentage(percentage)
                seteduTableData(eduTable)
                setGrade(region)
            }
            // setEducationDate(data1)
            // setEducationn(data2)

        }
        )
    }
    const populationAge = (region) => {
        const response = GraphData.populationAge(region);
        response.then(value => {
            console.log('>>>>>>>>>>>', value)
            if (value) {
                let maleCount = []
                let feMale = []
                let Age = []
                let lowest = 0
                let greater = 0

                value.data.Data.map(x => {
                    if (x.Region.includes('Total')) {
                        setTotalMedian(x.Medianage)
                        setAgeDepend(x.setAgeDepend)
                        setOldAgeDepend(x.Oldagedependencyratio)
                        setChildAgeDepend(x.Childdependencyratio)
                        settltAdlt(x.settltAdlt)
                        setAgeDepend(x.Agedependencyratio)
                        setOldAgeDepend(x.OldAgedependencyratio)
                        settltAdlt(x.Adults)
                    }
                    else if (x.Region.includes('Male') && !x.Region.includes('Percent')) {
                        setMaleMedian(x.Medianage)
                        setMaleSexRatio(x.Sexratio)
                    }
                    else if (x.Region.includes('Female') && !x.Region.includes('Percent')) {
                        setFemaleMedian(x.Medianage)
                        setFemleSexRatio(x.Sexratio)
                    }
                })

                for (const key in value.data.Data[0]) {

                    if (key !== 'Region') {
                        Age.push(key)

                    }
                }
                for (const key in value.data.Data[1]) {
                    if (key !== 'Region') {
                        let num = value.data.Data[1][key] ? parseInt(value.data.Data[1][key].replace(',', '')) : 0
                        maleCount.push(num)
                    }

                }
                for (const key in value.data.Data[3]) {
                    if (key !== 'Region') {
                        let x = parseInt(value.data.Data[3][key] ? value.data.Data[3][key].replace(',', '') : 0)
                        let y = (x * 2)
                        let z = x - y
                        feMale.push(z)
                    }

                }
                let botharray = maleCount.concat(feMale)
                setlowest(Math.min(...botharray) * 1.01)
                sethighest(Math.max(...botharray) * 1.01)
                setFeMaleCount(feMale.reverse())
                setMaleCount(maleCount.reverse())
                setAge(Age.reverse())

            }


            // setEducationDate(data1)
            // setEducationn(data2)

        }
        )
    }
    const RenterTable = (region) => {
        const response = GraphData.Renter(region);
        let Owner = []
        let Renter = []
        let Regionn = []
        let OwnTables = []
        response.then(value => {
            if (value) {
                const newArray = value.data.Data.filter((item => {
                    return item
                }))
                for (let array in newArray) {
                    const tableData =
                    {
                        key: Math.random(),
                        type: newArray[array].Region,
                        owner: newArray[array].Owner,
                        renter: newArray[array].Renter,

                    }
                    OwnTables.push(tableData)
                    Owner.push(newArray[array].Owner)
                    Renter.push(newArray[array].Renter)
                    Regionn.push(newArray[array].Region)
                }
                setOwner(Owner)
                setRenter(Renter)
                setOTable(OwnTables)
                setType(Regionn)
            }
        }
        )
    }
    const HouseIncome = (region) => {
        const response = GraphData.incomeHouse(region);
        response.then(value => {
            if (value) {
                let houseHolde = []
                let famlies = []
                let Married = []
                let NonFamlies = []
                let income = []
                let OwnTables = []
                let mean = []
                let median = []
                let name = []
                const newArray = value.data.Data.filter((item => {
                    return item
                }))
                for (let array in newArray) {
                    const tableData =
                    {
                        key: Math.random(),
                        mean: newArray[array].Mean,
                        median: newArray[array].Median,
                        name: newArray[array].Region,
                    }
                    mean.push(newArray[array].Mean)
                    median.push(newArray[array].Median)
                    OwnTables.push(tableData)
                    name.push(newArray[array].Region)
                }
                setMean(mean)
                setMedian(median)
                setMedianTable(OwnTables)
                setName(name)
                for (const key in value.data.Data[0]) {
                    if (key !== 'Region' && key !== 'Total' && key !== "Mean income" && key !== 'Median income') {
                        income.push(key)
                    }

                }
                for (const key in value.data.Data[0]) {
                    if (key !== 'Region' && key !== 'Total' && key !== "Mean income" && key !== 'Median income') {
                        houseHolde.push(value.data.Data[0][key].replace(',', '').replace(',', ''))
                    }

                }
                for (const key in value.data.Data[1]) {
                    if (key !== 'Region' && key !== 'Total' && key !== "Mean income" && key !== 'Median income') {
                        famlies.push(value.data.Data[1][key].replace(',', '').replace(',', ''))
                    }

                } for (const key in value.data.Data[2]) {
                    if (key !== 'Region' && key !== 'Total' && key !== "Mean income" && key !== 'Median income') {
                        Married.push(value.data.Data[2][key].replace(',', '').replace(',', ''))
                    }

                }
                for (const key in value.data.Data[3]) {
                    if (key !== 'Region' && key !== 'Total' && key !== "Mean income" && key !== 'Median income') {
                        NonFamlies.push(value.data.Data[3][key].replace(',', '').replace(',', ''))
                    }

                }
                setHouseHolds(houseHolde)
                setIncome(income)
                setMarried(Married)
                setMarriedFamilies(famlies)
                setNonFamlies(NonFamlies)
            }
        }
        )
    }
    const HouseType = (region) => {
        const response = GraphData.HouseType(region);
        response.then(value => {
            if (value) {
                let OwnTables = []
                let AvgHouseHold = []
                let label = []
                const newArray = value.data.Data.filter((item => {
                    return item
                }))
                for (let array in newArray) {
                    const tableData =
                    {
                        key: Math.random(),
                        type: newArray[array].Region,
                        count: newArray[array].TotalHouseholds,
                        avgSize: newArray[array].AverageHouseholdSize,
                        owned: newArray[array].Owned,
                    }
                    OwnTables.push(tableData)
                    AvgHouseHold.push(parseInt(newArray[array].AverageHouseholdSize))
                    label.push(newArray[array].Region)
                }
                setTable(OwnTables)
                setLabel(label)
                setAvgHouseHold(AvgHouseHold)
            }
        }
        )
    }

    const populationRace = (region) => {
        const response = GraphData.populationRace(region);
        response.then(value => {
            console.log("poppo", value)
            let raceTable = []
            let race = []
            let percent = []
            if (value) {
                for (let key in value.data.Data) {
                    // console.log(key[value]);

                    if (key !== 'Total' && !key.includes('Percentage')) {
                        let obj = {
                            key: Math.random(),
                            race: key,
                            population: value.data.Data[key],
                            percentage: value.data.Data[key + ' Percentage'],
                        }

                        console.log({ obj })
                        raceTable.push(obj)
                        race.push(key)
                        percent.push(parseInt(value.data.Data[key + ' Percentage']))
                        console.log("vli", value.data.Data[key + 'Percentage'])

                    }
                }
                setRaceTable(raceTable)
                console.log({ race }, { percent })
                setPercent(percent)
                setRace(race)
            }
        }
        )
    }

    const print = () => {
        var content = document.getElementsByClassName('Demo_pg');
        var pri = document.getElementById('ifmcontentstoprint').contentWindow;
        pri.document.open();
        pri.document.write(content[0].innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }
    return (
        <div>
            <div className='d-flex w-100'>
                <div className='ms-0'>
                    <p className='fs-40 Gothic_3D my-3'>{region}</p>
                </div>
                <div className='mt-auto ms-auto'>
                    <p className='fs-13 ms-3'>REI Litics uses the census bureau data api but is not endorsed or certified by the census bureau.</p>
                </div>
            </div>
            <div className='d-flex my-3'>
                <div className='row w-25 my-auto'>
                    <div className='d-block col-6'>
                        <label className='bluetxt fs-13'>Select State</label>
                        <select className="form-control form-select form-control-sm" onChange={handleChange} value={region}>

                            {regionName?.states?.map((state) => {
                                return (
                                    <option value={state}>{state}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='d-block col-6'>
                        <label className='bluetxt fs-13'>Select Area</label>
                        <select className="form-control form-select form-control-sm" onChange={handleChange} value={region}>

                            {regionName?.areas?.map((state) => {
                                return (
                                    <option value={state}>{state}</option>
                                )
                            })}
                        </select>
                    </div>

                </div>
                <div className='ms-auto my-auto'>
                    <button onClick={() => window.open("https://www.zillow.com/")} className='btn bluebtn px-4 fs-14 m-1'>Search properties on  Zillow </button>
                    {user.packageID == 'shuihshsu' ?
                        <>
                            <button className='btn greyBtn px-4 fs-14 m-1' disabled>Add to Favourite <img src={'/unfilledHeart1.svg'} className='ms-2 my-auto' /></button>
                            <button className='btn greyBtn px-4 fs-14 m-1' disabled>Print and Download<img src={'/print.svg'} className='ms-2 my-auto' /></button>
                        </>

                        :
                        <>
                            <button className='btn bluebtn px-4 fs-14 m-1'>Add to Favourite <img src={'/unfilledHeart1.svg'} className='ms-2 my-auto' /></button>
                            <button className='btn bluebtn px-4 fs-14 m-1' onClick={print}>Print and Download<img src={'/print.svg'} className='ms-2 my-auto' /></button>
                        </>
                    }
                </div>
            </div>
            {user.packageID == 'shuihshsu' ?
                <GraphComponent>
                    <div className='container_'>
                        <div className='graph'>
                            <BlurGraphComponent />
                        </div>
                        <Link href={`/`}>
                            <button className='btn btn-success cetered_ btnYelow px-5'>Unlock</button>
                        </Link>

                    </div>
                </GraphComponent>
                :

                <>
                    <div className='Demo_pg'>
                        <div className='card p-3 bg_light'>
                            <Population population={population} populationDate={populationDate} />
                        </div>
                        <div className='card p-3 my-4 bg_light'>
                            {/* <PopulationByAge totalMedian={totalMedian} maleMedian={maleMedian} femaleMedian={femaleMedian} AgeDepend={AgeDepend} OldAgeDepend={OldAgeDepend} ChildAgeDepend={ChildAgeDepend} FemaleRatioVal={FemaleRatioVal} MaleRatioVal={MaleRatioVal} tltAdlt={tltAdlt} Senior={Senior} male={maleCount} feMale={feMaleCount} age={age} lowest={lowest} highest={highest} /> */}
                            <PopulationByAge totalMedian={totalMedian} sexMaleRatio={sexMaleRatio} sexFemaleRatio={sexFemaleRatio} maleMedian={maleMedian} femaleMedian={femaleMedian} AgeDepend={AgeDepend} OldAgeDepend={OldAgeDepend} ChildAgeDepend={ChildAgeDepend} FemaleRatioVal={FemaleRatioVal} MaleRatioVal={MaleRatioVal} tltAdlt={tltAdlt} Senior={Senior} male={maleCount} feMale={feMaleCount} age={age} lowest={lowest} highest={highest} />
                        </div>
                        <div className='card p-3 my-4 bg_light'>
                            <HouseholdTypes data={oTable} type={type} owner={Owner} renter={renter} />
                        </div>
                        <div className='card p-3 my-4 bg_light'>
                            <IncomeHHT income={income} houseHolds={houseHolds} Married={Married} nonFamlies={nonFamlies} marriedFamilies={marriedFamilies} mean={mean} median={median} name={name} table={medianTable} />
                        </div>
                        <div className='card p-3 my-4 bg_light'>
                            <IncomeHHByType table={Table} AvgHouseHold={AvgHouseHold} label={label} />
                        </div>
                        <div className='card p-3 my-4 bg_light'>
                            <EduAttainment male={male} feMale={feMale} eduTableData={eduTableData} percentage={percentage} grade={grade} />
                        </div>
                        <div className='card p-3 my-4 bg_light'>
                            {console.log({ percent })}
                            <PopulationbyRace table={raceTable} race={race} percent={percent} />
                        </div>
                        <footer className='text-center mt-5'>
                            <p>DISCLAIMER - Data is provided “as is” via the Public Records API.</p>
                            <p>© Zillow, Inc. 2006-2020. Use is subject to Term of Use.</p>
                        </footer>
                        <iframe id="ifmcontentstoprint"
                            style={{
                                height: '0px',
                                width: '0px',
                                position: 'absolute',
                                display: 'none',
                            }}></iframe>
                    </div>
                </>
            }
        </div>
    );

}