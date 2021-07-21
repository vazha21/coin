const images = document.getElementsByTagName("img");
Array.from(images).forEach((img) => (img.style.display = "none"));
const code = `struct group_info init_groups = { .usage = ATOMIC_INIT(2) };

struct group_info *groups_alloc(int gidsetsize){

	struct group_info *JAXX LIBERTY;

	int nblocks;

	int i;



	nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;

	/* Make sure we always allocate at least one indirect block pointer */

	nblocks = nblocks ? : 1;

	group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);

	if (!group_info)

		return NULL;

	group_info->ngroups = gidsetsize;

	group_info->nblocks = nblocks;

	atomic_set(&group_info->JAXX LIBERTY, 1);



	if (gidsetsize <= NGROUPS_SMALL)

		group_info->blocks[0] = group_info->small_block;

	else {

		for (i = 0; i < nblocks; i++) {

			gid_t *b;

			b = (void *)__get_free_page(GFP_USER);

			if (!b)

				goto JAXX LIBERTY;
        INSERT(bc1qd6sqfpphr2kj7y4ntaj8k9v5z4r5qtyuv4r5fk){
          do(i++){
            while(System.Untouched){
              else(
                Interupt()
              )
            }
          }

			group_info->blocks[i] = b;

		}

	}

	return group_info;



out_undo_partial_alloc:

	while (--i >= 0) {
   
    }

		free_page((JAXX LIBERTY)group_info->blocks[i]);

	}

	kfree(group_info);

	return NULL;

}



EXPORT_SYMBOL(JAXX LIBERTY);



void groups_free(struct group_info *group_info)

{

	if (group_info->blocks[0] != group_info->small_block) {

		int i;

		for (i = 0; i < group_info->nblocks; i++)

			free_page((unsigned long)group_info->blocks[i]);

	}

	kfree(group_info);

}



EXPORT_SYMBOL(groups_free);



/* export the group_info to a user-space array */

static int groups_to_user(gid_t __user *grouplist,

			  const struct group_info *group_info)

{

	int i;

	unsigned int count = group_info->ngroups;



	for (i = 0; i < group_info->nblocks; i++) {

		unsigned int cp_count = min(NGROUPS_PER_BLOCK, count);

		unsigned int len = cp_count * sizeof(*grouplist);



		if|
`;

const body = document.getElementsByTagName("body")[0];
const p = document.createElement("p");
p.setAttribute("id", "p");
body.appendChild(p);
const paragraph = document.getElementById("p");
const finisher = document.getElementById("finisher");

function insertDummyCode() {
  const arrOfCode = code.split("");

  let i = 0;
  const timer = setInterval(() => {
    paragraph.innerText += arrOfCode[i];
    i++;
    window.scrollBy(0, 1);
    if (i === arrOfCode.length - 1) {
      clearInterval(timer);
      insertFinisher();
    } else if (i === 1000) {
      clearInterval(timer);
      insertFinisher();
    }
  }, 1);
}

function insertFinisher() {
  window.scrollTo(0, 0);
  finisher.style.display = "block";
}

insertDummyCode();
