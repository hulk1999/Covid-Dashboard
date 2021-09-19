const casesDataWorld = {
  src: "https://www.worldometers.info/coronavirus/",
  DailyCases: [[1579651200000,0],[1579737600000,271],[1579824000000,475],[1579910400000,701],[1579996800000,787],[1580083200000,1784],[1580169600000,1479],[1580256000000,1763],[1580342400000,2016],[1580428800000,2138],[1580515200000,2626],[1580601600000,2857],[1580688000000,3253],[1580774400000,3927],[1580860800000,3728],[1580947200000,3184],[1581033600000,3453],[1581120000000,2685],[1581206400000,3004],[1581292800000,2569],[1581379200000,2050],[1581465600000,14180],[1581552000000,5175],[1581638400000,2681],[1581724800000,2132],[1581811200000,2158],[1581897600000,2031],[1581984000000,1880],[1582070400000,534],[1582156800000,1034],[1582243200000,1058],[1582329600000,1038],[1582416000000,629],[1582502400000,992],[1582588800000,861],[1582675200000,1135],[1582761600000,1455],[1582848000000,1817],[1582934400000,2198],[1583020800000,2627],[1583107200000,2605],[1583193600000,3299],[1583280000000,3170],[1583366400000,4277],[1583452800000,5081],[1583539200000,5720],[1583625600000,5866],[1583712000000,7188],[1583798400000,8696],[1583884800000,11222],[1583971200000,14241],[1584057600000,16580],[1584144000000,17202],[1584230400000,19237],[1584316800000,20557],[1584403200000,23178],[1584489600000,27284],[1584576000000,32077],[1584662400000,38906],[1584748800000,34090],[1584835200000,36778],[1584921600000,44590],[1585008000000,45959],[1585094400000,49753],[1585180800000,62157],[1585267200000,67188],[1585353600000,67773],[1585440000000,61444],[1585526400000,64731],[1585612800000,75618],[1585699200000,78325],[1585785600000,79454],[1585872000000,86384],[1585958400000,82419],[1586044800000,74078],[1586131200000,76048],[1586217600000,83578],[1586304000000,89087],[1586390400000,89996],[1586476800000,97820],[1586563200000,85658],[1586649600000,76454],[1586736000000,76171],[1586822400000,80409],[1586908800000,87082],[1586995200000,87569],[1587081600000,90252],[1587168000000,85322],[1587254400000,78336],[1587340800000,82396],[1587427200000,82351],[1587513600000,84693],[1587600000000,87171],[1587686400000,98235],[1587772800000,91841],[1587859200000,75509],[1587945600000,71057],[1588032000000,79637],[1588118400000,85473],[1588204800000,89873],[1588291200000,95783],[1588377600000,83471],[1588464000000,82500],[1588550400000,81338],[1588636800000,84232],[1588723200000,97214],[1588809600000,97033],[1588896000000,96919],[1588982400000,88930],[1589068800000,80854],[1589155200000,73709],[1589241600000,89622],[1589328000000,92677],[1589414400000,98649],[1589500800000,102979],[1589587200000,97732],[1589673600000,83755],[1589760000000,92246],[1589846400000,99603],[1589932800000,106105],[1590019200000,109791],[1590105600000,110261],[1590192000000,102815],[1590278400000,98437],[1590364800000,92292],[1590451200000,95680],[1590537600000,110195],[1590624000000,120341],[1590710400000,129750],[1590796800000,127042],[1590883200000,111466],[1590969600000,103702],[1591056000000,120355],[1591142400000,123975],[1591228800000,134256],[1591315200000,133803],[1591401600000,131682],[1591488000000,117084],[1591574400000,110383],[1591660800000,125032],[1591747200000,139981],[1591833600000,141868],[1591920000000,145558],[1592006400000,138023],[1592092800000,126860],[1592179200000,128615],[1592265600000,149031],[1592352000000,151274],[1592438400000,145795],[1592524800000,186720],[1592611200000,162361],[1592697600000,134408],[1592784000000,143517],[1592870400000,169479],[1592956800000,180002],[1593043200000,186432],[1593129600000,199607],[1593216000000,184401],[1593302400000,168226],[1593388800000,163496],[1593475200000,183787],[1593561600000,204650],[1593648000000,216282],[1593734400000,219623],[1593820800000,201298],[1593907200000,180595],[1593993600000,176508],[1594080000000,216702],[1594166400000,221366],[1594252800000,231243],[1594339200000,243384],[1594425600000,223318],[1594512000000,202082],[1594598400000,196952],[1594684800000,228633],[1594771200000,242268],[1594857600000,254161],[1594944000000,245358],[1595030400000,232972],[1595116800000,223363],[1595203200000,204946],[1595289600000,246745],[1595376000000,285845],[1595462400000,279677],[1595548800000,293183],[1595635200000,267582],[1595721600000,223948],[1595808000000,218176],[1595894400000,255588],[1595980800000,294903],[1596067200000,290793],[1596153600000,294917],[1596240000000,265301],[1596326400000,224270],[1596412800000,202067],[1596499200000,260777],[1596585600000,278411],[1596672000000,287774],[1596758400000,287383],[1596844800000,277376],[1596931200000,226716],[1597017600000,220009],[1597104000000,274841],[1597190400000,294707],[1597276800000,291057],[1597363200000,294386],[1597449600000,270761],[1597536000000,220385],[1597622400000,205216],[1597708800000,265588],[1597795200000,280901],[1597881600000,277154],[1597968000000,268528],[1598054400000,272948],[1598140800000,216889],[1598227200000,219425],[1598313600000,263305],[1598400000000,282330],[1598486400000,282032],[1598572800000,294460],[1598659200000,269947],[1598745600000,229322],[1598832000000,250896],[1598918400000,268555],[1599004800000,292946],[1599091200000,294514],[1599177600000,310888],[1599264000000,282826],[1599350400000,243349],[1599436800000,206448],[1599523200000,252142],[1599609600000,295913],[1599696000000,308321],[1599782400000,321980],[1599868800000,296384],[1599955200000,256072],[1600041600000,250791],[1600128000000,288593],[1600214400000,314254],[1600300800000,318224],[1600387200000,327190],[1600473600000,304479],[1600560000000,260324],[1600646400000,238913],[1600732800000,283721],[1600819200000,322557],[1600905600000,319046],[1600992000000,326205],[1601078400000,309205],[1601164800000,262163],[1601251200000,240114],[1601337600000,294753],[1601424000000,322188],[1601510400000,326949],[1601596800000,331377],[1601683200000,306842],[1601769600000,259451],[1601856000000,273482],[1601942400000,317486],[1602028800000,353672],[1602115200000,361414],[1602201600000,364746],[1602288000000,377904],[1602374400000,292224],[1602460800000,278786],[1602547200000,325783],[1602633600000,388005],[1602720000000,404336],[1602806400000,419462],[1602892800000,398971],[1602979200000,345510],[1603065600000,345153],[1603152000000,395414],[1603238400000,447891],[1603324800000,484868],[1603411200000,495160],[1603497600000,477597],[1603584000000,429549],[1603670400000,415566],[1603756800000,469990],[1603843200000,517933],[1603929600000,550250],[1604016000000,575521],[1604102400000,504462],[1604188800000,466929],[1604275200000,472394],[1604361600000,503027],[1604448000000,576520],[1604534400000,627527],[1604620800000,632193],[1604707200000,633443],[1604793600000,501569],[1604880000000,486263],[1604966400000,573354],[1605052800000,629225],[1605139200000,655719],[1605225600000,662974],[1605312000000,606746],[1605398400000,515148],[1605484800000,502139],[1605571200000,577452],[1605657600000,623829],[1605744000000,665326],[1605830400000,669391],[1605916800000,613044],[1606003200000,522381],[1606089600000,535889],[1606176000000,575312],[1606262400000,643380],[1606348800000,623773],[1606435200000,609718],[1606521600000,597552],[1606608000000,524412],[1606694400000,497473],[1606780800000,594432],[1606867200000,647543],[1606953600000,692547],[1607040000000,693645],[1607126400000,647732],[1607212800000,548612],[1607299200000,527365],[1607385600000,613587],[1607472000000,662355],[1607558400000,700807],[1607644800000,712083],[1607731200000,660708],[1607817600000,549928],[1607904000000,535317],[1607990400000,608152],[1608076800000,729359],[1608163200000,737506],[1608249600000,720071],[1608336000000,642747],[1608422400000,560704],[1608508800000,543166],[1608595200000,623363],[1608681600000,695997],[1608768000000,698662],[1608854400000,539198],[1608940800000,470946],[1609027200000,446848],[1609113600000,504796],[1609200000000,643506],[1609286400000,735496],[1609372800000,762688],[1609459200000,640999],[1609545600000,569888],[1609632000000,540774],[1609718400000,567171],[1609804800000,720956],[1609891200000,806692],[1609977600000,842676],[1610064000000,840552],[1610150400000,770835],[1610236800000,639514],[1610323200000,594071],[1610409600000,687292],[1610496000000,746140],[1610582400000,752830],[1610668800000,758178],[1610755200000,679954],[1610841600000,557840],[1610928000000,480593],[1611014400000,595781],[1611100800000,666656],[1611187200000,651271],[1611273600000,638450],[1611360000000,602997],[1611446400000,481590],[1611532800000,441734],[1611619200000,533069],[1611705600000,589945],[1611792000000,598093],[1611878400000,583064],[1611964800000,531235],[1612051200000,416008],[1612137600000,393211],[1612224000000,456599],[1612310400000,487482],[1612396800000,506610],[1612483200000,494617],[1612569600000,442891],[1612656000000,361211],[1612742400000,322441],[1612828800000,390137],[1612915200000,442134],[1613001600000,443777],[1613088000000,427513],[1613174400000,387666],[1613260800000,303082],[1613347200000,265102],[1613433600000,346161],[1613520000000,397465],[1613606400000,402047],[1613692800000,411193],[1613779200000,385532],[1613865600000,319755],[1613952000000,287647],[1614038400000,378390],[1614124800000,443795],[1614211200000,448835],[1614297600000,435555],[1614384000000,397665],[1614470400000,320616],[1614556800000,296456],[1614643200000,372942],[1614729600000,445396],[1614816000000,450303],[1614902400000,453412],[1614988800000,414298],[1615075200000,378494],[1615161600000,294514],[1615248000000,394471],[1615334400000,469002],[1615420800000,482261],[1615507200000,493540],[1615593600000,453077],[1615680000000,376217],[1615766400000,339790],[1615852800000,455445],[1615939200000,534856],[1616025600000,552168],[1616112000000,558059],[1616198400000,517536],[1616284800000,436282],[1616371200000,427213],[1616457600000,505477],[1616544000000,590152],[1616630400000,634429],[1616716800000,633935],[1616803200000,595790],[1616889600000,501129],[1616976000000,460631],[1617062400000,548131],[1617148800000,646373],[1617235200000,706198],[1617321600000,651755],[1617408000000,567311],[1617494400000,551236],[1617580800000,481072],[1617667200000,635986],[1617753600000,689582],[1617840000000,746636],[1617926400000,791752],[1618012800000,720629],[1618099200000,652514],[1618185600000,590026],[1618272000000,742046],[1618358400000,813564],[1618444800000,843421],[1618531200000,836863],[1618617600000,802854],[1618704000000,729535],[1618790400000,661017],[1618876800000,829885],[1618963200000,887835],[1619049600000,889412],[1619136000000,901503],[1619222400000,844184],[1619308800000,744937],[1619395200000,676658],[1619481600000,836853],[1619568000000,892594],[1619654400000,903585],[1619740800000,876266],[1619827200000,816042],[1619913600000,697299],[1620000000000,673839],[1620086400000,784011],[1620172800000,849609],[1620259200000,861171],[1620345600000,841272],[1620432000000,796381],[1620518400000,665757],[1620604800000,611883],[1620691200000,716468],[1620777600000,756267],[1620864000000,746934],[1620950400000,702136],[1621036800000,647404],[1621123200000,549263],[1621209600000,538086],[1621296000000,617158],[1621382400000,665055],[1621468800000,657147],[1621555200000,625128],[1621641600000,583686],[1621728000000,490402],[1621814400000,445033],[1621900800000,527042],[1621987200000,562325],[1622073600000,538602],[1622160000000,510428],[1622246400000,501855],[1622332800000,414841],[1622419200000,368878],[1622505600000,450783],[1622592000000,492104],[1622678400000,476822],[1622764800000,421848],[1622851200000,410907],[1622937600000,339568],[1623024000000,315422],[1623110400000,364596],[1623196800000,424008],[1623283200000,438559],[1623369600000,416452],[1623456000000,382190],[1623542400000,310327],[1623628800000,303656],[1623715200000,373231],[1623801600000,401851],[1623888000000,390719],[1623974400000,405673],[1624060800000,368578],[1624147200000,305096],[1624233600000,281160],[1624320000000,378055],[1624406400000,434270],[1624492800000,406689],[1624579200000,413162],[1624665600000,382001],[1624752000000,323234],[1624838400000,318087],[1624924800000,384296],[1625011200000,398432],[1625097600000,434351],[1625184000000,441546],[1625270400000,398813],[1625356800000,354156],[1625443200000,348762],[1625529600000,434813],[1625616000000,464108],[1625702400000,488833],[1625788800000,497093],[1625875200000,449373],[1625961600000,402211],[1626048000000,399835],[1626134400000,515469],[1626220800000,557425],[1626307200000,567764],[1626393600000,566863],[1626480000000,526824],[1626566400000,494342],[1626652800000,433107],[1626739200000,519821],[1626825600000,565670],[1626912000000,573437],[1626998400000,583504],[1627084800000,546461],[1627171200000,494743],[1627257600000,465216],[1627344000000,605072],[1627430400000,665375],[1627516800000,668313],[1627603200000,654933],[1627689600000,597267],[1627776000000,546975],[1627862400000,502397],[1627948800000,623692],[1628035200000,694272],[1628121600000,716785],[1628208000000,706721],[1628294400000,642672],[1628380800000,569053],[1628467200000,525131],[1628553600000,652788],[1628640000000,707678],[1628726400000,723983],[1628812800000,731805],[1628899200000,648770],[1628985600000,563293],[1629072000000,536155],[1629158400000,670602],[1629244800000,709768],[1629331200000,746674],[1629417600000,719977],[1629504000000,638355],[1629590400000,562802],[1629676800000,533235],[1629763200000,678352],[1629849600000,737313],[1629936000000,736296],[1630022400000,721689],[1630108800000,643999],[1630195200000,557749],[1630281600000,538901],[1630368000000,628074],[1630454400000,694790],[1630540800000,692997],[1630627200000,674542],[1630713600000,584319],[1630800000000,538647],[1630886400000,504291],[1630972800000,540311],[1631059200000,612288],[1631145600000,625725],[1631232000000,605180],[1631318400000,552496],[1631404800000,486411],[1631491200000,453227],[1631577600000,524725],[1631664000000,568993]],
  DailyCases7DaysAvg: [[1579651200000,0],[1579737600000,0],[1579824000000,0],[1579910400000,0],[1579996800000,0],[1580083200000,0],[1580169600000,0],[1580256000000,0],[1580342400000,1286],[1580428800000,1524],[1580515200000,1799],[1580601600000,2095],[1580688000000,2304],[1580774400000,2655],[1580860800000,2935],[1580947200000,3101],[1581033600000,3290],[1581120000000,3298],[1581206400000,3319],[1581292800000,3222],[1581379200000,2953],[1581465600000,4447],[1581552000000,4730],[1581638400000,4621],[1581724800000,4542],[1581811200000,4420],[1581897600000,4344],[1581984000000,4320],[1582070400000,2370],[1582156800000,1778],[1582243200000,1547],[1582329600000,1391],[1582416000000,1172],[1582502400000,1023],[1582588800000,878],[1582675200000,964],[1582761600000,1024],[1582848000000,1132],[1582934400000,1299],[1583020800000,1583],[1583107200000,1814],[1583193600000,2162],[1583280000000,2453],[1583366400000,2857],[1583452800000,3322],[1583539200000,3826],[1583625600000,4288],[1583712000000,4943],[1583798400000,5714],[1583884800000,6864],[1583971200000,8288],[1584057600000,9930],[1584144000000,11571],[1584230400000,13481],[1584316800000,15391],[1584403200000,17459],[1584489600000,19754],[1584576000000,22302],[1584662400000,25492],[1584748800000,27904],[1584835200000,30410],[1584921600000,33843],[1585008000000,37098],[1585094400000,40308],[1585180800000,44604],[1585267200000,48645],[1585353600000,53457],[1585440000000,56981],[1585526400000,59858],[1585612800000,64095],[1585699200000,68176],[1585785600000,70648],[1585872000000,73390],[1585958400000,75482],[1586044800000,77287],[1586131200000,78903],[1586217600000,80041],[1586304000000,81579],[1586390400000,83084],[1586476800000,84718],[1586563200000,85181],[1586649600000,85520],[1586736000000,85537],[1586822400000,85085],[1586908800000,84799],[1586995200000,84452],[1587081600000,83371],[1587168000000,83322],[1587254400000,83592],[1587340800000,84481],[1587427200000,84758],[1587513600000,84417],[1587600000000,84360],[1587686400000,85501],[1587772800000,86432],[1587859200000,86028],[1587945600000,84408],[1588032000000,84020],[1588118400000,84132],[1588204800000,84518],[1588291200000,84167],[1588377600000,82972],[1588464000000,83971],[1588550400000,85439],[1588636800000,86096],[1588723200000,87773],[1588809600000,88796],[1588896000000,88958],[1588982400000,89738],[1589068800000,89503],[1589155200000,88413],[1589241600000,89183],[1589328000000,88535],[1589414400000,88765],[1589500800000,89632],[1589587200000,90889],[1589673600000,91303],[1589760000000,93951],[1589846400000,95378],[1589932800000,97295],[1590019200000,98887],[1590105600000,99928],[1590192000000,100654],[1590278400000,102751],[1590364800000,102758],[1590451200000,102197],[1590537600000,102781],[1590624000000,104289],[1590710400000,107073],[1590796800000,110534],[1590883200000,112395],[1590969600000,114025],[1591056000000,117550],[1591142400000,119519],[1591228800000,121507],[1591315200000,122085],[1591401600000,122749],[1591488000000,123551],[1591574400000,124505],[1591660800000,125174],[1591747200000,127460],[1591833600000,128547],[1591920000000,130227],[1592006400000,131133],[1592092800000,132529],[1592179200000,135134],[1592265600000,138562],[1592352000000,140176],[1592438400000,140736],[1592524800000,146617],[1592611200000,150094],[1592697600000,151172],[1592784000000,153301],[1592870400000,156222],[1592956800000,160326],[1593043200000,166131],[1593129600000,167972],[1593216000000,171121],[1593302400000,175952],[1593388800000,178806],[1593475200000,180851],[1593561600000,184371],[1593648000000,188635],[1593734400000,191495],[1593820800000,193909],[1593907200000,195676],[1593993600000,197535],[1594080000000,202237],[1594166400000,204625],[1594252800000,206762],[1594339200000,210156],[1594425600000,213303],[1594512000000,216371],[1594598400000,219293],[1594684800000,220997],[1594771200000,223983],[1594857600000,227256],[1594944000000,227539],[1595030400000,228918],[1595116800000,231958],[1595203200000,233101],[1595289600000,235687],[1595376000000,241913],[1595462400000,245558],[1595548800000,252390],[1595635200000,257335],[1595721600000,257418],[1595808000000,259308],[1595894400000,260571],[1595980800000,261865],[1596067200000,263453],[1596153600000,263701],[1596240000000,263376],[1596326400000,263421],[1596412800000,261120],[1596499200000,261861],[1596585600000,259505],[1596672000000,259074],[1596758400000,257997],[1596844800000,259723],[1596931200000,260072],[1597017600000,262635],[1597104000000,264644],[1597190400000,266973],[1597276800000,267441],[1597363200000,268442],[1597449600000,267496],[1597536000000,266593],[1597622400000,264479],[1597708800000,263157],[1597795200000,261185],[1597881600000,259198],[1597968000000,255505],[1598054400000,255817],[1598140800000,255318],[1598227200000,257347],[1598313600000,257022],[1598400000000,257225],[1598486400000,257923],[1598572800000,261627],[1598659200000,261198],[1598745600000,262975],[1598832000000,267470],[1598918400000,268220],[1599004800000,269737],[1599091200000,271520],[1599177600000,273867],[1599264000000,275707],[1599350400000,277710],[1599436800000,271361],[1599523200000,269016],[1599609600000,269440],[1599696000000,271413],[1599782400000,272997],[1599868800000,274933],[1599955200000,276752],[1600041600000,283086],[1600128000000,288293],[1600214400000,290914],[1600300800000,292328],[1600387200000,293073],[1600473600000,294229],[1600560000000,294836],[1600646400000,293140],[1600732800000,292443],[1600819200000,293630],[1600905600000,293747],[1600992000000,293607],[1601078400000,294281],[1601164800000,294545],[1601251200000,294715],[1601337600000,296292],[1601424000000,296239],[1601510400000,297369],[1601596800000,298107],[1601683200000,297769],[1601769600000,297382],[1601856000000,302149],[1601942400000,305396],[1602028800000,309894],[1602115200000,314818],[1602201600000,319585],[1602288000000,329736],[1602374400000,334419],[1602460800000,335176],[1602547200000,336361],[1602633600000,341266],[1602720000000,347398],[1602806400000,355214],[1602892800000,358224],[1602979200000,365836],[1603065600000,375317],[1603152000000,385264],[1603238400000,393820],[1603324800000,405324],[1603411200000,416138],[1603497600000,427371],[1603584000000,439376],[1603670400000,449435],[1603756800000,460088],[1603843200000,470095],[1603929600000,479435],[1604016000000,490915],[1604102400000,494753],[1604188800000,500093],[1604275200000,508212],[1604361600000,512930],[1604448000000,521301],[1604534400000,532340],[1604620800000,540436],[1604707200000,558862],[1604793600000,563810],[1604880000000,565792],[1604966400000,575838],[1605052800000,583368],[1605139200000,587395],[1605225600000,591793],[1605312000000,587978],[1605398400000,589919],[1605484800000,592186],[1605571200000,592772],[1605657600000,592001],[1605744000000,593373],[1605830400000,594290],[1605916800000,595190],[1606003200000,596223],[1606089600000,601045],[1606176000000,600739],[1606262400000,603532],[1606348800000,597595],[1606435200000,589071],[1606521600000,586858],[1606608000000,587148],[1606694400000,581660],[1606780800000,584392],[1606867200000,584986],[1606953600000,594811],[1607040000000,606800],[1607126400000,613970],[1607212800000,617426],[1607299200000,621696],[1607385600000,624433],[1607472000000,626549],[1607558400000,627729],[1607644800000,630363],[1607731200000,632217],[1607817600000,632405],[1607904000000,633541],[1607990400000,632764],[1608076800000,642336],[1608163200000,647579],[1608249600000,648720],[1608336000000,646155],[1608422400000,647693],[1608508800000,648815],[1608595200000,650988],[1608681600000,646222],[1608768000000,640673],[1608854400000,614834],[1608940800000,590291],[1609027200000,574026],[1609113600000,568544],[1609200000000,571422],[1609286400000,577064],[1609372800000,586211],[1609459200000,600755],[1609545600000,614888],[1609632000000,628307],[1609718400000,637217],[1609804800000,648282],[1609891200000,658453],[1609977600000,669879],[1610064000000,698387],[1610150400000,727094],[1610236800000,741199],[1610323200000,745043],[1610409600000,740233],[1610496000000,731583],[1610582400000,718747],[1610668800000,706980],[1610755200000,693997],[1610841600000,682330],[1610928000000,666118],[1611014400000,653045],[1611100800000,641690],[1611187200000,627182],[1611273600000,610078],[1611360000000,599084],[1611446400000,588191],[1611532800000,582640],[1611619200000,573681],[1611705600000,562722],[1611792000000,555126],[1611878400000,547213],[1611964800000,536961],[1612051200000,527593],[1612137600000,520660],[1612224000000,509737],[1612310400000,495099],[1612396800000,482030],[1612483200000,469394],[1612569600000,456774],[1612656000000,448946],[1612742400000,438836],[1612828800000,429341],[1612915200000,422863],[1613001600000,413887],[1613088000000,404301],[1613174400000,396411],[1613260800000,388107],[1613347200000,379916],[1613433600000,373633],[1613520000000,367253],[1613606400000,361291],[1613692800000,358959],[1613779200000,358655],[1613865600000,361036],[1613952000000,364257],[1614038400000,368861],[1614124800000,375480],[1614211200000,382164],[1614297600000,385644],[1614384000000,387378],[1614470400000,387500],[1614556800000,388759],[1614643200000,387981],[1614729600000,388209],[1614816000000,388419],[1614902400000,390970],[1614988800000,393346],[1615075200000,401614],[1615161600000,401337],[1615248000000,404413],[1615334400000,407785],[1615420800000,412350],[1615507200000,418083],[1615593600000,423623],[1615680000000,423297],[1615766400000,429766],[1615852800000,438476],[1615939200000,447883],[1616025600000,457871],[1616112000000,467087],[1616198400000,476296],[1616284800000,484877],[1616371200000,497365],[1616457600000,504513],[1616544000000,512413],[1616630400000,524164],[1616716800000,535003],[1616803200000,546183],[1616889600000,555446],[1616976000000,560220],[1617062400000,566314],[1617148800000,574346],[1617235200000,584598],[1617321600000,587144],[1617408000000,583075],[1617494400000,590234],[1617580800000,593153],[1617667200000,605705],[1617753600000,611877],[1617840000000,617654],[1617926400000,637654],[1618012800000,659556],[1618099200000,674024],[1618185600000,689589],[1618272000000,704741],[1618358400000,722453],[1618444800000,736278],[1618531200000,742724],[1618617600000,754469],[1618704000000,765473],[1618790400000,775614],[1618876800000,788163],[1618963200000,798773],[1619049600000,805343],[1619136000000,814577],[1619222400000,820482],[1619308800000,822682],[1619395200000,824916],[1619481600000,825912],[1619568000000,826591],[1619654400000,828617],[1619740800000,825011],[1619827200000,820990],[1619913600000,814186],[1620000000000,813782],[1620086400000,806234],[1620172800000,800093],[1620259200000,794034],[1620345600000,789034],[1620432000000,786226],[1620518400000,781720],[1620604800000,772870],[1620691200000,763220],[1620777600000,749885],[1620864000000,733566],[1620950400000,713690],[1621036800000,692407],[1621123200000,675765],[1621209600000,665222],[1621296000000,651036],[1621382400000,638005],[1621468800000,625178],[1621555200000,614178],[1621641600000,605074],[1621728000000,596666],[1621814400000,583373],[1621900800000,570499],[1621987200000,555823],[1622073600000,538889],[1622160000000,522502],[1622246400000,510813],[1622332800000,500018],[1622419200000,489138],[1622505600000,478245],[1622592000000,468213],[1622678400000,459387],[1622764800000,446733],[1622851200000,433741],[1622937600000,422987],[1623024000000,415350],[1623110400000,403038],[1623196800000,393311],[1623283200000,387844],[1623369600000,387073],[1623456000000,382970],[1623542400000,378794],[1623628800000,377112],[1623715200000,378347],[1623801600000,375180],[1623888000000,368347],[1623974400000,366807],[1624060800000,364862],[1624147200000,364115],[1624233600000,360901],[1624320000000,361590],[1624406400000,366222],[1624492800000,368503],[1624579200000,369573],[1624665600000,371490],[1624752000000,374082],[1624838400000,379356],[1624924800000,380249],[1625011200000,375129],[1625097600000,379080],[1625184000000,383135],[1625270400000,385537],[1625356800000,389955],[1625443200000,394336],[1625529600000,401554],[1625616000000,410935],[1625702400000,418719],[1625788800000,426654],[1625875200000,433877],[1625961600000,440742],[1626048000000,448038],[1626134400000,459560],[1626220800000,472891],[1626307200000,484167],[1626393600000,494135],[1626480000000,505198],[1626566400000,518361],[1626652800000,523113],[1626739200000,523735],[1626825600000,524913],[1626912000000,525724],[1626998400000,528100],[1627084800000,530906],[1627171200000,530964],[1627257600000,535550],[1627344000000,547729],[1627430400000,561972],[1627516800000,575527],[1627603200000,585730],[1627689600000,592989],[1627776000000,600450],[1627862400000,605761],[1627948800000,608422],[1628035200000,612550],[1628121600000,619474],[1628208000000,626873],[1628294400000,633359],[1628380800000,636513],[1628467200000,639761],[1628553600000,643918],[1628640000000,645832],[1628726400000,646861],[1628812800000,650444],[1628899200000,651316],[1628985600000,650492],[1629072000000,652068],[1629158400000,654612],[1629244800000,654911],[1629331200000,658152],[1629417600000,656463],[1629504000000,654975],[1629590400000,654905],[1629676800000,654487],[1629763200000,655595],[1629849600000,659530],[1629936000000,658047],[1630022400000,658292],[1630108800000,659098],[1630195200000,658376],[1630281600000,659185],[1630368000000,652003],[1630454400000,645929],[1630540800000,639742],[1630627200000,633008],[1630713600000,624481],[1630800000000,621753],[1630886400000,616809],[1630972800000,604271],[1631059200000,592485],[1631145600000,582875],[1631232000000,572965],[1631318400000,568420],[1631404800000,560958],[1631491200000,553662],[1631577600000,551436],[1631664000000,545251]],
};