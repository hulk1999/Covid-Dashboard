const casesDataWorld = {
  src: "https://www.worldometers.info/coronavirus/",
  DailyCases: [[1579651200000,0],[1579737600000,271],[1579824000000,475],[1579910400000,701],[1579996800000,787],[1580083200000,1784],[1580169600000,1479],[1580256000000,1763],[1580342400000,2016],[1580428800000,2138],[1580515200000,2626],[1580601600000,2857],[1580688000000,3253],[1580774400000,3927],[1580860800000,3728],[1580947200000,3184],[1581033600000,3453],[1581120000000,2685],[1581206400000,3004],[1581292800000,2569],[1581379200000,2050],[1581465600000,14180],[1581552000000,5175],[1581638400000,2681],[1581724800000,2132],[1581811200000,2158],[1581897600000,2031],[1581984000000,1880],[1582070400000,534],[1582156800000,1034],[1582243200000,1058],[1582329600000,1038],[1582416000000,629],[1582502400000,992],[1582588800000,861],[1582675200000,1135],[1582761600000,1455],[1582848000000,1817],[1582934400000,2198],[1583020800000,2627],[1583107200000,2605],[1583193600000,3299],[1583280000000,3170],[1583366400000,4277],[1583452800000,5081],[1583539200000,5720],[1583625600000,5866],[1583712000000,7188],[1583798400000,8696],[1583884800000,11222],[1583971200000,14241],[1584057600000,16580],[1584144000000,17202],[1584230400000,19237],[1584316800000,20557],[1584403200000,23178],[1584489600000,27284],[1584576000000,32077],[1584662400000,38906],[1584748800000,34090],[1584835200000,36778],[1584921600000,44590],[1585008000000,45959],[1585094400000,49753],[1585180800000,62157],[1585267200000,67188],[1585353600000,67773],[1585440000000,61444],[1585526400000,64731],[1585612800000,75615],[1585699200000,78323],[1585785600000,79453],[1585872000000,86383],[1585958400000,82418],[1586044800000,74077],[1586131200000,76047],[1586217600000,83577],[1586304000000,89086],[1586390400000,89995],[1586476800000,97819],[1586563200000,85657],[1586649600000,76453],[1586736000000,76170],[1586822400000,80408],[1586908800000,87080],[1586995200000,87567],[1587081600000,90249],[1587168000000,85322],[1587254400000,78335],[1587340800000,82394],[1587427200000,82350],[1587513600000,84691],[1587600000000,87170],[1587686400000,98233],[1587772800000,91838],[1587859200000,75505],[1587945600000,71055],[1588032000000,79633],[1588118400000,85468],[1588204800000,89869],[1588291200000,95778],[1588377600000,83467],[1588464000000,82497],[1588550400000,81334],[1588636800000,84228],[1588723200000,97207],[1588809600000,97027],[1588896000000,96914],[1588982400000,88922],[1589068800000,80851],[1589155200000,73705],[1589241600000,89618],[1589328000000,92670],[1589414400000,98638],[1589500800000,102969],[1589587200000,97723],[1589673600000,83750],[1589760000000,92237],[1589846400000,99593],[1589932800000,106092],[1590019200000,109779],[1590105600000,110250],[1590192000000,102806],[1590278400000,98427],[1590364800000,92283],[1590451200000,95667],[1590537600000,110180],[1590624000000,120325],[1590710400000,129731],[1590796800000,127023],[1590883200000,111455],[1590969600000,103692],[1591056000000,120336],[1591142400000,123958],[1591228800000,134234],[1591315200000,133783],[1591401600000,131664],[1591488000000,117072],[1591574400000,110370],[1591660800000,125013],[1591747200000,139959],[1591833600000,141846],[1591920000000,145540],[1592006400000,138005],[1592092800000,126848],[1592179200000,128599],[1592265600000,149006],[1592352000000,151253],[1592438400000,145779],[1592524800000,186683],[1592611200000,162340],[1592697600000,134396],[1592784000000,143500],[1592870400000,169453],[1592956800000,179975],[1593043200000,186406],[1593129600000,199576],[1593216000000,184378],[1593302400000,168207],[1593388800000,163478],[1593475200000,183762],[1593561600000,204620],[1593648000000,216252],[1593734400000,219593],[1593820800000,201272],[1593907200000,180579],[1593993600000,176493],[1594080000000,216670],[1594166400000,221338],[1594252800000,231215],[1594339200000,243353],[1594425600000,223293],[1594512000000,202063],[1594598400000,196934],[1594684800000,228602],[1594771200000,242240],[1594857600000,254132],[1594944000000,245334],[1595030400000,232953],[1595116800000,223346],[1595203200000,204930],[1595289600000,246713],[1595376000000,285801],[1595462400000,279638],[1595548800000,293144],[1595635200000,267550],[1595721600000,223933],[1595808000000,218159],[1595894400000,255563],[1595980800000,294856],[1596067200000,290755],[1596153600000,294883],[1596240000000,265272],[1596326400000,224254],[1596412800000,202055],[1596499200000,260742],[1596585600000,278376],[1596672000000,287738],[1596758400000,287350],[1596844800000,277347],[1596931200000,226699],[1597017600000,219992],[1597104000000,274803],[1597190400000,294669],[1597276800000,291017],[1597363200000,294354],[1597449600000,270735],[1597536000000,220370],[1597622400000,205200],[1597708800000,265559],[1597795200000,280866],[1597881600000,277124],[1597968000000,268507],[1598054400000,272920],[1598140800000,216874],[1598227200000,219411],[1598313600000,263279],[1598400000000,282300],[1598486400000,282004],[1598572800000,294429],[1598659200000,269928],[1598745600000,229311],[1598832000000,250866],[1598918400000,268527],[1599004800000,292916],[1599091200000,294484],[1599177600000,310857],[1599264000000,282807],[1599350400000,243339],[1599436800000,206440],[1599523200000,252131],[1599609600000,295894],[1599696000000,308298],[1599782400000,321953],[1599868800000,296364],[1599955200000,256061],[1600041600000,250780],[1600128000000,288571],[1600214400000,314228],[1600300800000,318198],[1600387200000,327165],[1600473600000,304458],[1600560000000,260312],[1600646400000,238901],[1600732800000,283701],[1600819200000,322535],[1600905600000,319023],[1600992000000,326184],[1601078400000,309186],[1601164800000,262155],[1601251200000,240103],[1601337600000,294734],[1601424000000,322162],[1601510400000,326926],[1601596800000,331353],[1601683200000,306829],[1601769600000,259446],[1601856000000,273465],[1601942400000,317463],[1602028800000,353653],[1602115200000,361403],[1602201600000,364727],[1602288000000,377882],[1602374400000,292218],[1602460800000,278779],[1602547200000,325774],[1602633600000,387993],[1602720000000,404315],[1602806400000,419440],[1602892800000,398956],[1602979200000,345502],[1603065600000,345141],[1603152000000,395397],[1603238400000,447869],[1603324800000,484844],[1603411200000,495148],[1603497600000,477583],[1603584000000,429542],[1603670400000,415555],[1603756800000,469973],[1603843200000,517917],[1603929600000,550234],[1604016000000,575494],[1604102400000,504449],[1604188800000,466919],[1604275200000,472387],[1604361600000,503015],[1604448000000,576501],[1604534400000,627511],[1604620800000,632181],[1604707200000,633426],[1604793600000,501562],[1604880000000,486253],[1604966400000,573340],[1605052800000,629196],[1605139200000,655697],[1605225600000,662944],[1605312000000,606723],[1605398400000,515131],[1605484800000,502122],[1605571200000,577420],[1605657600000,623803],[1605744000000,665297],[1605830400000,669371],[1605916800000,613026],[1606003200000,522371],[1606089600000,535872],[1606176000000,575290],[1606262400000,643343],[1606348800000,623755],[1606435200000,609691],[1606521600000,597516],[1606608000000,524389],[1606694400000,497449],[1606780800000,594388],[1606867200000,647506],[1606953600000,692511],[1607040000000,693617],[1607126400000,647699],[1607212800000,548593],[1607299200000,527341],[1607385600000,613543],[1607472000000,662311],[1607558400000,700766],[1607644800000,712040],[1607731200000,660671],[1607817600000,549904],[1607904000000,535290],[1607990400000,608111],[1608076800000,729289],[1608163200000,737453],[1608249600000,720024],[1608336000000,642707],[1608422400000,560676],[1608508800000,543138],[1608595200000,623315],[1608681600000,695956],[1608768000000,698612],[1608854400000,539170],[1608940800000,470924],[1609027200000,446832],[1609113600000,504777],[1609200000000,643464],[1609286400000,735453],[1609372800000,762650],[1609459200000,640977],[1609545600000,569864],[1609632000000,540748],[1609718400000,567151],[1609804800000,720920],[1609891200000,806639],[1609977600000,842609],[1610064000000,840500],[1610150400000,770766],[1610236800000,639482],[1610323200000,594038],[1610409600000,687242],[1610496000000,746087],[1610582400000,752771],[1610668800000,758123],[1610755200000,679900],[1610841600000,557810],[1610928000000,480570],[1611014400000,595729],[1611100800000,666607],[1611187200000,651226],[1611273600000,638402],[1611360000000,602953],[1611446400000,481566],[1611532800000,441707],[1611619200000,533024],[1611705600000,589903],[1611792000000,598045],[1611878400000,583022],[1611964800000,531196],[1612051200000,415988],[1612137600000,393188],[1612224000000,456562],[1612310400000,487444],[1612396800000,506566],[1612483200000,494575],[1612569600000,442858],[1612656000000,361194],[1612742400000,322425],[1612828800000,390103],[1612915200000,442090],[1613001600000,443741],[1613088000000,427478],[1613174400000,387631],[1613260800000,303066],[1613347200000,265081],[1613433600000,346125],[1613520000000,397434],[1613606400000,402016],[1613692800000,411157],[1613779200000,385494],[1613865600000,319733],[1613952000000,287628],[1614038400000,378354],[1614124800000,443753],[1614211200000,448786],[1614297600000,435518],[1614384000000,397625],[1614470400000,320594],[1614556800000,296430],[1614643200000,372904],[1614729600000,445350],[1614816000000,450255],[1614902400000,453364],[1614988800000,414256],[1615075200000,378446],[1615161600000,294490],[1615248000000,394429],[1615334400000,468951],[1615420800000,482211],[1615507200000,493487],[1615593600000,453023],[1615680000000,376192],[1615766400000,339765],[1615852800000,455392],[1615939200000,534802],[1616025600000,552109],[1616112000000,558001],[1616198400000,517487],[1616284800000,436250],[1616371200000,427174],[1616457600000,505417],[1616544000000,590093],[1616630400000,634361],[1616716800000,633879],[1616803200000,595736],[1616889600000,501098],[1616976000000,460604],[1617062400000,548080],[1617148800000,646316],[1617235200000,706140],[1617321600000,651705],[1617408000000,567287],[1617494400000,551221],[1617580800000,481050],[1617667200000,635934],[1617753600000,689516],[1617840000000,746573],[1617926400000,791690],[1618012800000,720582],[1618099200000,652487],[1618185600000,590002],[1618272000000,741988],[1618358400000,813516],[1618444800000,843370],[1618531200000,836816],[1618617600000,802820],[1618704000000,729508],[1618790400000,660994],[1618876800000,829839],[1618963200000,887794],[1619049600000,889378],[1619136000000,901459],[1619222400000,844138],[1619308800000,744915],[1619395200000,676642],[1619481600000,836809],[1619568000000,892545],[1619654400000,903536],[1619740800000,876222],[1619827200000,816006],[1619913600000,697280],[1620000000000,673813],[1620086400000,783970],[1620172800000,849564],[1620259200000,861122],[1620345600000,841227],[1620432000000,796338],[1620518400000,665737],[1620604800000,611864],[1620691200000,716429],[1620777600000,756216],[1620864000000,746887],[1620950400000,702082],[1621036800000,647360],[1621123200000,549245],[1621209600000,538065],[1621296000000,617114],[1621382400000,665005],[1621468800000,657094],[1621555200000,625080],[1621641600000,583643],[1621728000000,490380],[1621814400000,445009],[1621900800000,526997],[1621987200000,562276],[1622073600000,538559],[1622160000000,510399],[1622246400000,501808],[1622332800000,414813],[1622419200000,368859],[1622505600000,450736],[1622592000000,492044],[1622678400000,476772],[1622764800000,421819],[1622851200000,410867],[1622937600000,339543],[1623024000000,315395],[1623110400000,364564],[1623196800000,423953],[1623283200000,438507],[1623369600000,416397],[1623456000000,382145],[1623542400000,310304],[1623628800000,303630],[1623715200000,373176],[1623801600000,401798],[1623888000000,390672],[1623974400000,405610],[1624060800000,368529],[1624147200000,305068],[1624233600000,281134],[1624320000000,377999],[1624406400000,434202],[1624492800000,406643],[1624579200000,413114],[1624665600000,381962],[1624752000000,323213],[1624838400000,318068],[1624924800000,384254],[1625011200000,398406],[1625097600000,434307],[1625184000000,441506],[1625270400000,398777],[1625356800000,354137],[1625443200000,348750],[1625529600000,434776],[1625616000000,464076],[1625702400000,488801],[1625788800000,497052],[1625875200000,449340],[1625961600000,402198],[1626048000000,399825],[1626134400000,515442],[1626220800000,557392],[1626307200000,567725],[1626393600000,566832],[1626480000000,526802],[1626566400000,494320],[1626652800000,433091],[1626739200000,519801],[1626825600000,565626],[1626912000000,573401],[1626998400000,583472],[1627084800000,546435],[1627171200000,494724],[1627257600000,465204],[1627344000000,605048],[1627430400000,665337],[1627516800000,668284],[1627603200000,654910],[1627689600000,597058],[1627776000000,546879],[1627862400000,502394],[1627948800000,623695],[1628035200000,694266],[1628121600000,716762],[1628208000000,706702],[1628294400000,642657],[1628380800000,569045],[1628467200000,525112],[1628553600000,652771],[1628640000000,707716],[1628726400000,723982],[1628812800000,731827],[1628899200000,648799],[1628985600000,563303],[1629072000000,536153],[1629158400000,670638],[1629244800000,709814],[1629331200000,746725],[1629417600000,720067],[1629504000000,638529],[1629590400000,562927],[1629676800000,532569],[1629763200000,678361],[1629849600000,737352],[1629936000000,736382],[1630022400000,721805],[1630108800000,644064],[1630195200000,557785],[1630281600000,540465],[1630368000000,628525],[1630454400000,695117],[1630540800000,693393],[1630627200000,674833],[1630713600000,584599],[1630800000000,538735],[1630886400000,505326],[1630972800000,540300],[1631059200000,611559],[1631145600000,625860],[1631232000000,605327],[1631318400000,553705],[1631404800000,486700],[1631491200000,450256],[1631577600000,526342],[1631664000000,572181],[1631750400000,587571],[1631836800000,575834],[1631923200000,491779],[1632009600000,428559],[1632096000000,412026],[1632182400000,485949],[1632268800000,531239],[1632355200000,522119]],
  DailyCases7DaysAvg: [[1579651200000,0],[1579737600000,0],[1579824000000,0],[1579910400000,0],[1579996800000,0],[1580083200000,0],[1580169600000,0],[1580256000000,0],[1580342400000,1286],[1580428800000,1524],[1580515200000,1799],[1580601600000,2095],[1580688000000,2304],[1580774400000,2655],[1580860800000,2935],[1580947200000,3101],[1581033600000,3290],[1581120000000,3298],[1581206400000,3319],[1581292800000,3222],[1581379200000,2953],[1581465600000,4447],[1581552000000,4730],[1581638400000,4621],[1581724800000,4542],[1581811200000,4420],[1581897600000,4344],[1581984000000,4320],[1582070400000,2370],[1582156800000,1778],[1582243200000,1547],[1582329600000,1391],[1582416000000,1172],[1582502400000,1023],[1582588800000,878],[1582675200000,964],[1582761600000,1024],[1582848000000,1132],[1582934400000,1299],[1583020800000,1583],[1583107200000,1814],[1583193600000,2162],[1583280000000,2453],[1583366400000,2857],[1583452800000,3322],[1583539200000,3826],[1583625600000,4288],[1583712000000,4943],[1583798400000,5714],[1583884800000,6864],[1583971200000,8288],[1584057600000,9930],[1584144000000,11571],[1584230400000,13481],[1584316800000,15391],[1584403200000,17459],[1584489600000,19754],[1584576000000,22302],[1584662400000,25492],[1584748800000,27904],[1584835200000,30410],[1584921600000,33843],[1585008000000,37098],[1585094400000,40308],[1585180800000,44604],[1585267200000,48645],[1585353600000,53457],[1585440000000,56981],[1585526400000,59858],[1585612800000,64094],[1585699200000,68176],[1585785600000,70647],[1585872000000,73389],[1585958400000,75481],[1586044800000,77285],[1586131200000,78903],[1586217600000,80039],[1586304000000,81578],[1586390400000,83083],[1586476800000,84717],[1586563200000,85180],[1586649600000,85519],[1586736000000,85536],[1586822400000,85084],[1586908800000,84798],[1586995200000,84450],[1587081600000,83370],[1587168000000,83321],[1587254400000,83590],[1587340800000,84479],[1587427200000,84757],[1587513600000,84415],[1587600000000,84359],[1587686400000,85499],[1587772800000,86431],[1587859200000,86025],[1587945600000,84406],[1588032000000,84018],[1588118400000,84129],[1588204800000,84515],[1588291200000,84163],[1588377600000,82968],[1588464000000,83967],[1588550400000,85435],[1588636800000,86092],[1588723200000,87768],[1588809600000,88791],[1588896000000,88954],[1588982400000,89732],[1589068800000,89498],[1589155200000,88408],[1589241600000,89177],[1589328000000,88530],[1589414400000,88760],[1589500800000,89624],[1589587200000,90882],[1589673600000,91297],[1589760000000,93943],[1589846400000,95369],[1589932800000,97286],[1590019200000,98877],[1590105600000,99918],[1590192000000,100644],[1590278400000,102740],[1590364800000,102748],[1590451200000,102186],[1590537600000,102770],[1590624000000,104277],[1590710400000,107060],[1590796800000,110519],[1590883200000,112381],[1590969600000,114010],[1591056000000,117535],[1591142400000,119503],[1591228800000,121490],[1591315200000,122068],[1591401600000,122732],[1591488000000,123534],[1591574400000,124488],[1591660800000,125157],[1591747200000,127442],[1591833600000,128529],[1591920000000,130209],[1592006400000,131115],[1592092800000,132512],[1592179200000,135116],[1592265600000,138543],[1592352000000,140157],[1592438400000,140718],[1592524800000,146596],[1592611200000,150073],[1592697600000,151151],[1592784000000,153279],[1592870400000,156201],[1592956800000,160304],[1593043200000,166107],[1593129600000,167950],[1593216000000,171097],[1593302400000,175928],[1593388800000,178782],[1593475200000,180826],[1593561600000,184347],[1593648000000,188610],[1593734400000,191470],[1593820800000,193884],[1593907200000,195651],[1593993600000,197510],[1594080000000,202211],[1594166400000,204600],[1594252800000,206737],[1594339200000,210131],[1594425600000,213277],[1594512000000,216347],[1594598400000,219266],[1594684800000,220972],[1594771200000,223957],[1594857600000,227231],[1594944000000,227514],[1595030400000,228894],[1595116800000,231934],[1595203200000,233077],[1595289600000,235664],[1595376000000,241887],[1595462400000,245531],[1595548800000,252360],[1595635200000,257303],[1595721600000,257387],[1595808000000,259277],[1595894400000,260541],[1595980800000,261835],[1596067200000,263423],[1596153600000,263671],[1596240000000,263346],[1596326400000,263392],[1596412800000,261091],[1596499200000,261831],[1596585600000,259477],[1596672000000,259045],[1596758400000,257970],[1596844800000,259695],[1596931200000,260043],[1597017600000,262607],[1597104000000,264615],[1597190400000,266942],[1597276800000,267411],[1597363200000,268412],[1597449600000,267467],[1597536000000,266563],[1597622400000,264449],[1597708800000,263130],[1597795200000,261157],[1597881600000,259172],[1597968000000,255481],[1598054400000,255792],[1598140800000,255293],[1598227200000,257323],[1598313600000,256997],[1598400000000,257202],[1598486400000,257899],[1598572800000,261603],[1598659200000,261175],[1598745600000,262952],[1598832000000,267445],[1598918400000,268195],[1599004800000,269711],[1599091200000,271495],[1599177600000,273841],[1599264000000,275681],[1599350400000,277685],[1599436800000,271339],[1599523200000,268996],[1599609600000,269422],[1599696000000,271395],[1599782400000,272980],[1599868800000,274917],[1599955200000,276735],[1600041600000,283069],[1600128000000,288274],[1600214400000,290894],[1600300800000,292307],[1600387200000,293053],[1600473600000,294209],[1600560000000,294816],[1600646400000,293119],[1600732800000,292423],[1600819200000,293610],[1600905600000,293728],[1600992000000,293587],[1601078400000,294264],[1601164800000,294526],[1601251200000,294698],[1601337600000,296274],[1601424000000,296221],[1601510400000,297350],[1601596800000,298089],[1601683200000,297752],[1601769600000,297364],[1601856000000,302131],[1601942400000,305378],[1602028800000,309876],[1602115200000,314802],[1602201600000,319569],[1602288000000,329720],[1602374400000,334402],[1602460800000,335160],[1602547200000,336348],[1602633600000,341254],[1602720000000,347384],[1602806400000,355200],[1602892800000,358211],[1602979200000,365823],[1603065600000,375303],[1603152000000,385249],[1603238400000,393803],[1603324800000,405307],[1603411200000,416122],[1603497600000,427355],[1603584000000,439361],[1603670400000,449419],[1603756800000,460074],[1603843200000,470080],[1603929600000,479422],[1604016000000,490899],[1604102400000,494738],[1604188800000,500077],[1604275200000,508197],[1604361600000,512916],[1604448000000,521286],[1604534400000,532325],[1604620800000,540423],[1604707200000,558849],[1604793600000,563797],[1604880000000,565779],[1604966400000,575824],[1605052800000,583353],[1605139200000,587379],[1605225600000,591774],[1605312000000,587960],[1605398400000,589897],[1605484800000,592165],[1605571200000,592748],[1605657600000,591977],[1605744000000,593348],[1605830400000,594267],[1605916800000,595167],[1606003200000,596202],[1606089600000,601023],[1606176000000,600718],[1606262400000,603510],[1606348800000,597576],[1606435200000,589049],[1606521600000,586834],[1606608000000,587123],[1606694400000,581633],[1606780800000,584361],[1606867200000,584957],[1606953600000,594778],[1607040000000,606768],[1607126400000,613937],[1607212800000,617395],[1607299200000,621665],[1607385600000,624401],[1607472000000,626517],[1607558400000,627696],[1607644800000,630327],[1607731200000,632181],[1607817600000,632368],[1607904000000,633503],[1607990400000,632728],[1608076800000,642296],[1608163200000,647537],[1608249600000,648677],[1608336000000,646111],[1608422400000,647650],[1608508800000,648771],[1608595200000,650944],[1608681600000,646181],[1608768000000,640632],[1608854400000,614797],[1608940800000,590256],[1609027200000,573992],[1609113600000,568512],[1609200000000,571391],[1609286400000,577033],[1609372800000,586182],[1609459200000,600725],[1609545600000,614859],[1609632000000,628277],[1609718400000,637186],[1609804800000,648252],[1609891200000,658421],[1609977600000,669844],[1610064000000,698348],[1610150400000,727047],[1610236800000,741153],[1610323200000,744993],[1610409600000,740182],[1610496000000,731532],[1610582400000,718698],[1610668800000,706930],[1610755200000,693949],[1610841600000,682282],[1610928000000,666072],[1611014400000,652998],[1611100800000,641645],[1611187200000,627137],[1611273600000,610035],[1611360000000,599043],[1611446400000,588150],[1611532800000,582599],[1611619200000,573640],[1611705600000,562683],[1611792000000,555086],[1611878400000,547174],[1611964800000,536924],[1612051200000,527555],[1612137600000,520623],[1612224000000,509701],[1612310400000,495064],[1612396800000,481995],[1612483200000,469360],[1612569600000,456740],[1612656000000,448912],[1612742400000,438804],[1612828800000,429309],[1612915200000,422830],[1613001600000,413855],[1613088000000,404270],[1613174400000,396380],[1613260800000,388077],[1613347200000,379884],[1613433600000,373602],[1613520000000,367222],[1613606400000,361261],[1613692800000,358930],[1613779200000,358625],[1613865600000,361006],[1613952000000,364227],[1614038400000,368830],[1614124800000,375448],[1614211200000,382130],[1614297600000,385609],[1614384000000,387342],[1614470400000,387466],[1614556800000,388723],[1614643200000,387944],[1614729600000,388172],[1614816000000,388383],[1614902400000,390931],[1614988800000,393308],[1615075200000,401572],[1615161600000,401295],[1615248000000,404370],[1615334400000,407742],[1615420800000,412306],[1615507200000,418039],[1615593600000,423577],[1615680000000,423254],[1615766400000,429723],[1615852800000,438432],[1615939200000,447838],[1616025600000,457825],[1616112000000,467040],[1616198400000,476250],[1616284800000,484829],[1616371200000,497317],[1616457600000,504463],[1616544000000,512361],[1616630400000,524112],[1616716800000,534952],[1616803200000,546130],[1616889600000,555394],[1616976000000,560169],[1617062400000,566265],[1617148800000,574296],[1617235200000,584551],[1617321600000,587097],[1617408000000,583032],[1617494400000,590194],[1617580800000,593114],[1617667200000,605665],[1617753600000,611836],[1617840000000,617612],[1617926400000,637610],[1618012800000,659510],[1618099200000,673976],[1618185600000,689540],[1618272000000,704691],[1618358400000,722406],[1618444800000,736233],[1618531200000,742680],[1618617600000,754429],[1618704000000,765431],[1618790400000,775573],[1618876800000,788124],[1618963200000,798734],[1619049600000,805307],[1619136000000,814542],[1619222400000,820444],[1619308800000,822645],[1619395200000,824881],[1619481600000,825877],[1619568000000,826555],[1619654400000,828577],[1619740800000,824973],[1619827200000,820953],[1619913600000,814149],[1620000000000,813744],[1620086400000,806196],[1620172800000,800056],[1620259200000,793997],[1620345600000,788997],[1620432000000,786188],[1620518400000,781682],[1620604800000,772831],[1620691200000,763183],[1620777600000,749848],[1620864000000,733528],[1620950400000,713651],[1621036800000,692368],[1621123200000,675726],[1621209600000,665183],[1621296000000,650996],[1621382400000,637965],[1621468800000,625138],[1621555200000,614138],[1621641600000,605035],[1621728000000,596626],[1621814400000,583332],[1621900800000,570458],[1621987200000,555783],[1622073600000,538849],[1622160000000,522466],[1622246400000,510775],[1622332800000,499981],[1622419200000,489101],[1622505600000,478207],[1622592000000,468174],[1622678400000,459348],[1622764800000,446693],[1622851200000,433701],[1622937600000,422949],[1623024000000,415310],[1623110400000,403001],[1623196800000,393273],[1623283200000,387807],[1623369600000,387032],[1623456000000,382930],[1623542400000,378752],[1623628800000,377071],[1623715200000,378302],[1623801600000,375137],[1623888000000,368303],[1623974400000,366762],[1624060800000,364817],[1624147200000,364069],[1624233600000,360855],[1624320000000,361544],[1624406400000,366174],[1624492800000,368455],[1624579200000,369527],[1624665600000,371446],[1624752000000,374038],[1624838400000,379314],[1624924800000,380208],[1625011200000,375095],[1625097600000,379046],[1625184000000,383102],[1625270400000,385505],[1625356800000,389922],[1625443200000,394305],[1625529600000,401523],[1625616000000,410904],[1625702400000,418689],[1625788800000,426624],[1625875200000,433848],[1625961600000,440713],[1626048000000,448010],[1626134400000,459533],[1626220800000,472864],[1626307200000,484139],[1626393600000,494108],[1626480000000,505174],[1626566400000,518334],[1626652800000,523086],[1626739200000,523709],[1626825600000,524885],[1626912000000,525697],[1626998400000,528073],[1627084800000,530878],[1627171200000,530936],[1627257600000,535523],[1627344000000,547701],[1627430400000,561946],[1627516800000,575501],[1627603200000,585706],[1627689600000,592938],[1627776000000,600388],[1627862400000,605702],[1627948800000,608365],[1628035200000,612498],[1628121600000,619423],[1628208000000,626823],[1628294400000,633336],[1628380800000,636503],[1628467200000,639748],[1628553600000,643903],[1628640000000,645823],[1628726400000,646855],[1628812800000,650444],[1628899200000,651322],[1628985600000,650502],[1629072000000,652078],[1629158400000,654631],[1629244800000,654931],[1629331200000,658180],[1629417600000,656500],[1629504000000,655033],[1629590400000,654979],[1629676800000,654467],[1629763200000,655570],[1629849600000,659504],[1629936000000,658027],[1630022400000,658275],[1630108800000,659066],[1630195200000,658331],[1630281600000,659459],[1630368000000,652340],[1630454400000,646306],[1630540800000,640165],[1630627200000,633454],[1630713600000,624960],[1630800000000,622238],[1630886400000,617218],[1630972800000,604615],[1631059200000,592678],[1631145600000,583030],[1631232000000,573101],[1631318400000,568687],[1631404800000,561254],[1631491200000,553387],[1631577600000,551393],[1631664000000,545767],[1631750400000,540297],[1631836800000,536085],[1631923200000,527237],[1632009600000,518932],[1632096000000,513470],[1632182400000,507700],[1632268800000,501851],[1632355200000,492501]],
};